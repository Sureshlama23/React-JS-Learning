function ErrorMessage({ items }) {
  return <>{items.length === 0 && <h3>Food is empty</h3>}</>;
}

export default ErrorMessage;
