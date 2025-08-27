// Simples regressão linear: y = a*x + b
export function trainModel(data) {
  if (!data.length) return null;
  const n = data.length;
  const sumX = data.reduce((acc, p) => acc + p.x, 0);
  const sumY = data.reduce((acc, p) => acc + p.y, 0);
  const sumXY = data.reduce((acc, p) => acc + p.x * p.y, 0);
  const sumX2 = data.reduce((acc, p) => acc + p.x * p.x, 0);

  const a =
    (n * sumXY - sumX * sumY) /
    (n * sumX2 - sumX * sumX || 1);
  const b = (sumY - a * sumX) / n;

  return { a, b };
}

export function predict(model, x) {
  if (!model) return null;
  return model.a * x + model.b;
}