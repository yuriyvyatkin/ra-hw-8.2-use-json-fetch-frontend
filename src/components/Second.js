import useJsonFetch from '../functions/useJsonFetch';
import output from '../functions/output';

export default function Second() {
  const [data, loading, error] = useJsonFetch(process.env.REACT_APP_ERROR_URL);

  output({ name: `Second`, error });

  return <div className="Second" />;
}
