import useJsonFetch from '../functions/useJsonFetch';
import output from '../functions/output';

export default function Third() {
  const { loading } = useJsonFetch(`${process.env.REACT_APP_LOADING_URL}`);

  output({ name: 'Third', loading });

  return <div className="Third" />;
}
