import products from '~/data/products.json';

let internalDataset = [...products];

export function find() {
  return internalDataset;
}

export function findBy(key, value) {
  return internalDataset.filter(product => product[key] === value);
}

export function create(newProduct) {
  newProduct.id = internalDataset.length + 1;
  internalDataset.push(newProduct);
  return newProduct;
}

export function update(updatedProduct) {
  const index = internalDataset.findIndex(product => product.id === updatedProduct.id);
  if (index !== -1) {
    internalDataset.splice(index, 1, updatedProduct);
    return updatedProduct;
  }
  return null;
}

export function remove(productId) {
  const index = internalDataset.findIndex(product => product.id === productId);
  if (index !== -1) {
    const deletedProduct = internalDataset.splice(index, 1);
    return deletedProduct[0];
  }
  return null;
}
