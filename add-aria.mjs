import fs from 'fs';
import path from 'path';

function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let i = 0;
    (function next() {
      let file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          if (file.endsWith('.tsx')) {
            results.push(file);
          }
          next();
        }
      });
    })();
  });
}

function extractText(str) {
    // try to extract visible text from JSX
    let text = str.replace(/<[^>]*>?/gm, '').replace(/\{[^}]*\}/gm, '').trim();
    return text || 'Button';
}

walk('src', function(err, results) {
  if (err) throw err;
  
  results.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Match <button ... >
    // Regex logic: find <button, then anything up to >, then the inside, then </button>
    // but JSX allows nested elements. So it's easier to just match `<button ` and insert aria-label there if missing.
    
    let modified = content;
    
    // match <button followed by attributes
    // we use a replacer function
    const buttonRegex = /<button([\s\S]*?)>/g;
    
    modified = modified.replace(buttonRegex, (match, attrs) => {
        // if aria-label is already present, don't touch
        if (attrs.includes('aria-label=')) {
            return match;
        }
        
        // try to determine a good name based on id or content or generic
        let label = 'Action Button';
        
        // check for id
        const idMatch = attrs.match(/id=['"]([^'"]+)['"]/);
        if (idMatch && idMatch[1]) {
            label = idMatch[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        } else {
            // check for common class names
            if (attrs.includes('ChevronLeft') || attrs.includes('ArrowLeft') || attrs.includes('prev')) label = 'Previous';
            else if (attrs.includes('ChevronRight') || attrs.includes('ArrowRight') || attrs.includes('next')) label = 'Next';
            else if (attrs.includes('Close') || attrs.includes('X ')) label = 'Close';
            else if (attrs.includes('Menu')) label = 'Toggle Menu';
            else label = 'Button';
        }
        
        return `<button aria-label="${label}"${attrs}>`;
    });
    
    if (modified !== original) {
        fs.writeFileSync(file, modified, 'utf8');
        console.log('Updated:', file);
    }
  });
});
