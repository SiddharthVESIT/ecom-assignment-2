import { motion } from 'framer-motion';
import { Truck, MapPin, Users, Activity, BarChart3, FileCheck, CheckCircle, Package, Clock, AlertTriangle, ArrowRight, Factory, Hammer, Building2, TrendingUp } from 'lucide-react';

const regions = [
  { name: 'Maharashtra Zone', agents: 145, brokers: 42, activeLeads: 1200, status: 'Optimal', fill: 88 },
  { name: 'Delhi NCR Zone', agents: 98, brokers: 35, activeLeads: 850, status: 'Warning', fill: 62 },
  { name: 'Karnataka Zone', agents: 112, brokers: 50, activeLeads: 1540, status: 'Optimal', fill: 95 },
];

const supplyChainSteps = [
  { icon: FileCheck, title: 'Project Initialization', desc: 'Secure land, obtain RERA approvals and legal clearances.', duration: '3–6 months' },
  { icon: Factory, title: 'Contractor Allocation', desc: 'Assign raw material vendors (Steel, Cement) and construction teams.', duration: '1–2 months' },
  { icon: Hammer, title: 'Construction & QA', desc: 'Phased construction with milestone inspections and quality audits.', duration: '18–36 months' },
  { icon: Building2, title: 'Inventory Listed', desc: 'Properties added to Elevate portal for Pre-launch.', duration: '1 month' },
  { icon: Users, title: 'Agent Network Distribution', desc: 'Distribute marketing materials to 500+ verified brokers.', duration: '2 weeks' },
  { icon: CheckCircle, title: 'Lead Fulfillment', desc: 'Agents conduct site visits; finalize transaction.', duration: 'Ongoing' },
];

const vendors = [
  { name: 'Ultratech Cement Ltd.', material: 'OPC 53 Cement', region: 'Maharashtra', leadTime: '3 days', cost: '₹380/bag', reliability: 98, status: 'Active' },
  { name: 'Tata Steel BSL', material: 'TMT Fe-500D Bars', region: 'Pan India', leadTime: '5 days', cost: '₹58,200/MT', reliability: 96, status: 'Active' },
  { name: 'ACC Concrete', material: 'Ready-Mix Concrete', region: 'Karnataka', leadTime: '1 day', cost: '₹5,800/m³', reliability: 94, status: 'Active' },
  { name: 'Saint-Gobain Glass', material: 'Float Glass Panels', region: 'Delhi NCR', leadTime: '10 days', cost: '₹210/sqft', reliability: 91, status: 'Active' },
  { name: 'Kajaria Ceramics', material: 'Vitrified Tiles', region: 'Pan India', leadTime: '7 days', cost: '₹85/sqft', reliability: 93, status: 'Under Review' },
];

const inventoryData = [
  { type: 'Villas', total: 48, sold: 31, underConstruction: 12, available: 5, color: '#10B981' },
  { type: 'Apartments', total: 340, sold: 218, underConstruction: 85, available: 37, color: '#6366F1' },
  { type: 'Commercial', total: 22, sold: 14, underConstruction: 5, available: 3, color: '#F59E0B' },
  { type: 'Plots', total: 120, sold: 95, underConstruction: 0, available: 25, color: '#EF4444' },
];

const kpis = [
  { label: 'Avg. Listing → Sale', value: '42 days', change: '-8%', positive: true, icon: Clock },
  { label: 'Site Visit Conversion', value: '34%', change: '+5%', positive: true, icon: TrendingUp },
  { label: 'Procurement Lead Time', value: '4.2 days', change: '-12%', positive: true, icon: Package },
  { label: 'Supply Delay Rate', value: '3.1%', change: '+0.4%', positive: false, icon: AlertTriangle },
];

const procurementPipeline = [
  { project: 'Skyline Towers Phase II', material: 'TMT Steel (Grade Fe-500D)', qty: '450 MT', vendor: 'Tata Steel BSL', eta: 'Apr 15', status: 'In Transit', progress: 72 },
  { project: 'Palm Breeze Block C', material: 'Ready-Mix M40 Concrete', qty: '1,200 m³', vendor: 'ACC Concrete', eta: 'Apr 11', status: 'Delivered', progress: 100 },
  { project: 'Heritage Row Phase III', material: 'Vitrified Tiles (600x600)', qty: '8,500 sqft', vendor: 'Kajaria Ceramics', eta: 'Apr 22', status: 'Processing', progress: 30 },
  { project: 'Zenith Tech Park Annex', material: 'DGU Glass Panels', qty: '2,200 sqft', vendor: 'Saint-Gobain', eta: 'Apr 28', status: 'Ordered', progress: 15 },
];

export default function SCMPage() {
  const totalInventory = inventoryData.reduce((s, d) => s + d.total, 0);
  const totalSold = inventoryData.reduce((s, d) => s + d.sold, 0);

  return (
    <main className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 rounded-full text-[var(--color-accent)] text-sm font-medium mb-4">
            Enterprise Module
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-[var(--color-text-primary)] tracking-wide">
            SUPPLY CHAIN <span className="gradient-text">MANAGEMENT</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto text-lg">
            End-to-end property lifecycle — from procurement to lead fulfillment
          </p>
        </motion.div>

        {/* Definition */}
        <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-display)] mb-4 text-[var(--color-accent)] flex items-center gap-2">
            <Truck size={24} /> Network Distribution Model
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
            In luxury real estate, Supply Chain Management (SCM) governs the flow of <strong>raw materials → construction → finished inventory → broker distribution → buyer handover</strong>. Our SCM integrates procurement tracking, vendor management, construction milestones, and our 500+ broker distribution network to minimize turnaround from project launch to sellout.
          </p>
        </div>

        {/* ─── KPI Dashboard ─── */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8">
          LOGISTICS <span className="gradient-text">KPIs</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[var(--color-accent)]" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${kpi.positive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-400'}`}>
                    {kpi.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-[var(--color-text-primary)]">{kpi.value}</p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">{kpi.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Inventory Dashboard ─── */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8">
          INVENTORY <span className="gradient-text">TRACKER</span>
        </h2>

        {/* Summary strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[var(--color-surface)] rounded-xl p-4 border border-[var(--color-border)] text-center">
            <p className="text-2xl font-bold text-[var(--color-text-primary)]">{totalInventory}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">Total Units</p>
          </div>
          <div className="bg-[var(--color-surface)] rounded-xl p-4 border border-[var(--color-border)] text-center">
            <p className="text-2xl font-bold text-green-500">{totalSold}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">Sold</p>
          </div>
          <div className="bg-[var(--color-surface)] rounded-xl p-4 border border-[var(--color-border)] text-center">
            <p className="text-2xl font-bold text-blue-400">{inventoryData.reduce((s, d) => s + d.underConstruction, 0)}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">Under Construction</p>
          </div>
          <div className="bg-[var(--color-surface)] rounded-xl p-4 border border-[var(--color-border)] text-center">
            <p className="text-2xl font-bold text-[var(--color-accent)]">{inventoryData.reduce((s, d) => s + d.available, 0)}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">Available</p>
          </div>
        </div>

        {/* Inventory bars */}
        <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 mb-16">
          <div className="space-y-5">
            {inventoryData.map((cat, i) => (
              <motion.div
                key={cat.type}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">{cat.type}</span>
                  <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)]">
                    <span>Sold: <strong className="text-green-500">{cat.sold}</strong></span>
                    <span>Building: <strong className="text-blue-400">{cat.underConstruction}</strong></span>
                    <span>Available: <strong className="text-[var(--color-accent)]">{cat.available}</strong></span>
                  </div>
                </div>
                <div className="h-3 bg-[var(--color-border)] rounded-full overflow-hidden flex">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(cat.sold / cat.total) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * i }}
                    className="h-full rounded-l-full bg-green-500"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(cat.underConstruction / cat.total) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + 0.1 * i }}
                    className="h-full bg-blue-500"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(cat.available / cat.total) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + 0.1 * i }}
                    className="h-full rounded-r-full"
                    style={{ backgroundColor: cat.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Vendor Management ─── */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8">
          VENDOR <span className="gradient-text">MANAGEMENT</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden mb-16"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  {['Vendor', 'Material', 'Region', 'Lead Time', 'Unit Cost', 'Reliability', 'Status'].map(h => (
                    <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vendors.map(v => (
                  <tr key={v.name} className="border-b border-[var(--color-border)] hover:bg-[var(--color-border)]/20 transition-colors">
                    <td className="px-5 py-4 text-sm font-semibold text-[var(--color-text-primary)] whitespace-nowrap">{v.name}</td>
                    <td className="px-5 py-4 text-sm text-[var(--color-text-secondary)]">{v.material}</td>
                    <td className="px-5 py-4 text-sm text-[var(--color-text-secondary)]">{v.region}</td>
                    <td className="px-5 py-4 text-sm text-[var(--color-text-primary)] font-medium">{v.leadTime}</td>
                    <td className="px-5 py-4 text-sm text-[var(--color-accent)] font-medium">{v.cost}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-green-500" style={{ width: `${v.reliability}%` }} />
                        </div>
                        <span className="text-xs font-medium text-green-500">{v.reliability}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded ${v.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-400'}`}>
                        {v.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ─── Procurement Pipeline ─── */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8">
          PROCUREMENT <span className="gradient-text">PIPELINE</span>
        </h2>
        <div className="grid gap-4 mb-16">
          {procurementPipeline.map((item, i) => {
            const statusColors = {
              'Delivered': 'bg-green-500/10 text-green-500',
              'In Transit': 'bg-blue-500/10 text-blue-400',
              'Processing': 'bg-yellow-500/10 text-yellow-400',
              'Ordered': 'bg-purple-500/10 text-purple-400',
            };
            return (
              <motion.div
                key={item.project + item.material}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-bold text-[var(--color-text-primary)] truncate">{item.project}</h4>
                      <span className={`shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase rounded ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)]">{item.material} · {item.qty} · via {item.vendor}</p>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <div className="text-right">
                      <p className="text-[10px] text-[var(--color-text-secondary)] uppercase">ETA</p>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.eta}</p>
                    </div>
                    <div className="w-32">
                      <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 * i }}
                          className={`h-full rounded-full ${item.progress === 100 ? 'bg-green-500' : 'bg-[var(--color-accent)]'}`}
                        />
                      </div>
                      <p className="text-[10px] text-right text-[var(--color-text-secondary)] mt-0.5">{item.progress}%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Broker & Agent Network ─── */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8">
          BROKER & AGENT <span className="gradient-text">NETWORK</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {regions.map((reg, i) => (
            <motion.div
              key={reg.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <MapPin size={18} className="text-[var(--color-accent)]" /> {reg.name}
                </div>
                <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded ${reg.status === 'Optimal' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>
                  {reg.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">Registered Agents</span>
                  <span className="font-medium">{reg.agents}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">Verified Brokers</span>
                  <span className="font-medium">{reg.brokers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">Active Leads</span>
                  <span className="font-medium text-[var(--color-accent)]">{reg.activeLeads}</span>
                </div>
              </div>

              {/* Network capacity bar */}
              <div>
                <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mb-1">
                  <span>Network Capacity</span>
                  <span className="font-bold text-[var(--color-text-primary)]">{reg.fill}%</span>
                </div>
                <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${reg.fill}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.15 * i }}
                    className={`h-full rounded-full ${reg.fill > 80 ? 'bg-green-500' : reg.fill > 50 ? 'bg-yellow-400' : 'bg-red-400'}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Development & Distribution Chain ─── */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8">
          DEVELOPMENT & DISTRIBUTION <span className="gradient-text">CHAIN</span>
        </h2>
        <div className="relative mb-20">
          {/* Desktop horizontal timeline */}
          <div className="hidden md:block">
            <div className="grid grid-cols-6 gap-3">
              {supplyChainSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="relative"
                  >
                    {/* Connector */}
                    {i < supplyChainSteps.length - 1 && (
                      <div className="absolute top-5 left-[calc(50%+16px)] right-0 h-0.5 bg-[var(--color-border)]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.15 * i }}
                          className="h-full bg-[var(--color-accent)]"
                        />
                      </div>
                    )}

                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)] flex items-center justify-center mb-3 relative z-10">
                        <Icon size={18} className="text-[var(--color-accent)]" />
                      </div>
                      <h4 className="text-xs font-bold text-[var(--color-text-primary)] mb-1 leading-tight">{step.title}</h4>
                      <p className="text-[10px] text-[var(--color-text-secondary)] leading-snug">{step.desc}</p>
                      <span className="mt-2 px-2 py-0.5 bg-[var(--color-border)] rounded text-[10px] text-[var(--color-text-secondary)] font-medium">{step.duration}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden border-l-2 border-[var(--color-border)] ml-4 space-y-8">
            {supplyChainSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="relative pl-8"
                >
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg)]" />
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} className="text-[var(--color-accent)]" />
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)]">Phase {i + 1}: {step.title}</h4>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)]">{step.desc}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-[var(--color-border)] rounded text-[10px] text-[var(--color-text-secondary)] font-medium">{step.duration}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
