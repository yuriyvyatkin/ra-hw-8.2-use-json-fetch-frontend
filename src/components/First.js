import useJsonFetch from '../functions/useJsonFetch';
import output from '../functions/output';

export default function First() {
  const { data } = useJsonFetch(process.env.REACT_APP_DATA_URL);

  output({ name: `First`, data });

  return <div className="First" />;
}
