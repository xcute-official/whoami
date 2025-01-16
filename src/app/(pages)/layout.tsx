import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'whoami',
    description: 'your IT Guide'
}
const layout = ({children}:{children: React.ReactNode;}) => {
  return (
    <html>
        <body>
            {children}
        </body>
    </html>
  )
};

export default layout;
