export default function showDecimal(n: number): string {
    const isFloat = n - Math.round(n) === 0 ? true : false;
    
    const number = isFloat ? n.toString() : n.toFixed(1) ;

    return number;
} 
