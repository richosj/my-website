
import Link from 'next/link';
import './Sidebar.module.scss';

const Sidebar = () => {
    return(
        <nav className="sidebar">
            <ul className="flex gap-4">
                <li><Link href="/">홈</Link></li>
                <li><Link href="/projects/">작업1111111111111물</Link></li>
                <li><Link href="/lib">자료1122222222222222222</Link></li>
            </ul>
        </nav>
    )
  };
  
  export default Sidebar;