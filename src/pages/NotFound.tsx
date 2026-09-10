// src/pages/NotFound.tsx

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <p className="text-sm uppercase tracking-widest">
                Error 404
            </p>

            <h1 className="text-5xl font-bold mt-4">
                Page not found
            </h1>

            <p className="mt-4 max-w-md">
                The page you're looking for doesn't exist or may have been moved.
            </p>

            <a
                href="/"
                className="mt-8"
            >
                Back to Home
            </a>
        </main>
    );
}