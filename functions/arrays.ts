export function random(element: any[]): any[] {
  return element
    .map((valor) => ({ valor, aleatorio: Math.random() }))
    .sort((a, b) => a.aleatorio - b.aleatorio)
    .map((obj) => obj.valor);
}
