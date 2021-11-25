export default function output({ name, data, loading, error }) {
  if (data) {
    console.log(`${name} component data: ${data}`);
  }

  if (loading) {
    console.log(`${name} component loading: ${loading}`);
  }

  if (error) {
    console.log(`${name} component error: ${error}`);
  }
}
