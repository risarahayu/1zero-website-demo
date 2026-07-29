import { Activity } from "../types";

export function formatDateRange(startDate: Date, endDate: Date) {
  const sameDay = startDate.getTime() === endDate.getTime();
  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  const sameMonth = sameYear && startDate.getMonth() === endDate.getMonth();
  
  if (sameDay) {
    return startDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  if (sameMonth) {
    return `${startDate.getDate()}–${endDate.getDate()} ${startDate.toLocaleString(
      "en-US",
      { month: "long" }
    )} ${startDate.getFullYear()}`;
  }

  if (sameYear) {
    return `${startDate.getDate()} ${startDate.toLocaleString("en-US", {
      month: "long",
    })} – ${endDate.getDate()} ${endDate.toLocaleString("en-US", {
      month: "long",
    })} ${startDate.getFullYear()}`;
  }

  return `${startDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })} – ${endDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;
}

export const handleOpenModal = (
  item: any,
  index: number,
  setSelectedItemIndex: (index: number) => void,
  setSelectedItem: (item: any) => void
) => {
  setSelectedItemIndex(index);
  setSelectedItem(item);
};

export function previousItem(
  selectedItemIndex: number,
  displayedActivities: Activity[],
  setSelectedItemIndex: (index: number) => void,
  setSelectedItem: (item: Activity | null) => void
) {
  if (selectedItemIndex !== null && selectedItemIndex > 0) {
    const newIndex = selectedItemIndex - 1;
    setSelectedItemIndex(newIndex);
    setSelectedItem(displayedActivities[newIndex]);
  }
}

export function nextItem(
  selectedItemIndex: number,
  displayedActivities: Activity[],
  setSelectedItemIndex: (index: number) => void,
  setSelectedItem: (item: Activity | null) => void
) {
  if (selectedItemIndex < displayedActivities.length - 1) {
    const newIndex = selectedItemIndex + 1;
    setSelectedItemIndex(newIndex);
    setSelectedItem(displayedActivities[newIndex]);
  }
}

export function getSortedActivities(activities: Activity[]) {
  return [...activities].sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  );
}
