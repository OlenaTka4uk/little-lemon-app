import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function ReserveTableButton() {
  return (
    <>
      <Link as={Link} to="/reservation">
         <Button variant="warning">Reserve Table</Button>{' '}
      </Link>

    </>
  );
}

export default ReserveTableButton;