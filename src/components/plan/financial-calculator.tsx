import { useState } from 'react';
import { Info, Calculator } from 'lucide-react';
import { Input } from '@/components/ui/input';
const money = (n: number) => new Intl.NumberFormat('vi-VN', {maximumFractionDigits:0}).format(n) + ' ₫';
export function FinancialCalculator() {
  const [values, setValues] = useState({price:250000, cost:120000, fixed:13000000, quantity:150});
  const contribution = values.price - values.cost;
  const fields = [{key:'price', label:'Giá bán mỗi hũ (₫)'},{key:'cost',label:'Chi phí biến đổi mỗi hũ (₫)'},{key:'fixed',label:'Chi phí cố định mỗi tháng (₫)'},{key:'quantity',label:'Số hũ bán mỗi tháng'}] as const;
  return <section className="calculator-section"><div className="section-heading"><div><span className="eyebrow">KỊCH BẢN MINH HỌA</span><h2>Dự toán & điểm hòa vốn</h2></div><Calculator className="text-primary" size={28}/></div><p className="assumption-note"><Info size={17}/>Giả định có thể thay đổi; chi phí biến đổi cần bao gồm phí kênh và hoàn trả. Kết quả trước thuế, chưa gồm đầu tư ban đầu.</p><div className="calculator-inputs">{fields.map(f => <label key={f.key}>{f.label}<Input type="number" min="0" value={values[f.key]} onChange={e => setValues({...values,[f.key]:Math.max(0,Number(e.target.value))})}/></label>)}</div><div className="financial-results"><div><span>Doanh thu / tháng</span><strong>{money(values.price * values.quantity)}</strong></div><div><span>Lợi nhuận vận hành / tháng</span><strong>{money(contribution * values.quantity - values.fixed)}</strong></div><div><span>Điểm hòa vốn / tháng</span><strong>{contribution > 0 ? `${Math.ceil(values.fixed / contribution)} hũ` : 'Không đạt hòa vốn'}</strong></div></div><p className="formula-note">Điểm hòa vốn = Chi phí cố định ÷ (Giá bán − Chi phí biến đổi mỗi hũ).</p></section>;
}
