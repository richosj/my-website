
import Link from 'next/link';
import './Sidebar.module.scss';

const Sidebar = () => {
    return(
        <nav className="sidebar">
            <ul className="flex gap-4">
                <li><Link href="/">홈</Link></li>
                <li><Link href="/projects/">작업물</Link></li>
                <li><Link href="/lib">자료</Link></li>
            </ul>
        </nav>
    )
  };
  
  export default Sidebar;