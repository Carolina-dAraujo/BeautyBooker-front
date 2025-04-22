export function cn(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export function isNumber(value: any): boolean {
    return !isNaN(value) && value !== null && value !== '';
}

export function countdownToDate(targetDate: Date): number {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysLeft;
}

export function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export function generateUniqueId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}
