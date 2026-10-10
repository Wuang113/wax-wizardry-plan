import { Link, useRouterState } from '@tanstack/react-router';
import { Flame, ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { chapters } from '@/lib/plan-content';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [plans, setPlans] = useState(false);
  const path = useRouterState({ select: state => state.location.pathname });
  return <header className="site-header"><div className="header-inner">
    <Link to="/" className="brand"><span className="brand-icon"><Flame size={23}/></span><span>Mộc<span className="brand-dot">.</span></span><span className="brand-sub">HANDMADE CANDLES</span></Link>
    <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Điều hướng chính">
      <Link to="/" className={path === '/' ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)}>Tổng quan</Link>
      <div className="nav-dropdown"><Button variant="ghost" className="nav-link" onClick={() => setPlans(!plans)} aria-expanded={plans}>Kế hoạch kinh doanh <ChevronDown size={13}/></Button>{plans && <div className="dropdown-panel">{chapters.map(c => <Link key={c.id} to="/ke-hoach/$chapter" params={{ chapter: c.id }} onClick={() => {setPlans(false); setOpen(false);}}><span>{c.number}</span>{c.short}</Link>)}</div>}</div>
      <Link to="/ke-hoach/$chapter" params={{ chapter: 'swot' }} className={path.endsWith('swot') ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)}>Ma trận SWOT</Link>
    </nav>
    <Button asChild className="header-action"><Link to="/ke-hoach/$chapter" params={{chapter:'tai-chinh'}}>Kế hoạch tài chính <ArrowUpRight/></Link></Button>
    <Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? 'Đóng menu' : 'Mở menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
  </div></header>;
}
export function SiteFooter() { return <footer className="site-footer"><div className="content-width"><Link to="/" className="footer-brand"><Flame size={19}/> Mộc.</Link><span>Kế hoạch kinh doanh · Nến thơm thủ công</span><span>Đề án tham khảo · 2026</span></div></footer>; }
