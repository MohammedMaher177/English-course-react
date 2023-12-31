
export function getDateInDays(createdAt) {
    const diff = new Date(createdAt).getTime();
    return diff
  }