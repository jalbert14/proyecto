import { createRoot } from 'react-dom/client';
import HelloWorld from '../../my-react-app/src/components/HelloWorld';

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<HelloWorld />);