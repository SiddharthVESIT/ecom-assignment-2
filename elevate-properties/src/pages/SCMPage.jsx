import { motion } from 'framer-motion';
import { Truck, MapPin, Users, Activity, BarChart, FileCheck, CheckCircle } from 'lucide-react';

export default function SCMPage() {
  const regions = [
    { name: 'Maharashtra Zone', agents: 145, brokers: 42, activeLeads: 1200, status: 'Optimal' },
    { name: 'Delhi NCR Zone', agents: 98, brokers: 35, activeLeads: 850, status: 'Warning' },
    { name: 'Karnataka Zone', agents: 112, brokers: 50, activeLeads: 1540, status: 'Optimal' },
  ];

  const supplyChainSteps = [
    { title: 'Project Initialization', desc: 'Secure land, obtain RERA approvals and legal clearances.' },
    { title: 'Contractor Allocation', desc: 'Assign raw material vendors (Steel, Cement) and construction teams.' },
    { title: 'Inventory Listed', desc: 'Properties added to Elevate portal for Pre-launch.' },
    { title: 'Agent Network Distribution', desc: 'Distribute marketing materials to 500+ verified brokers.' },
    { title: 'Lead Fulfillment', desc: 'Agents conduct site visits; finalize transaction.' },
  ];

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
            Agent Network Distribution & Property Development Lifecycle
          </p>
        </motion.div>

        {/* Real Estate SCM Definition */}
        <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] mb-12">
           <h2 className="text-2xl font-[family-name:var(--font-display)] mb-4 text-[var(--color-accent)] flex items-center gap-2">
             <Truck size={24} /> Network Distribution Model
           </h2>
           <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
             In the luxury real estate sector, Supply Chain Management (SCM) focuses on the flow of inventory (properties) from developers to the final consumer. Our SCM seamlessly integrates <strong>property development</strong> with our vast <strong>broker and agent distribution network</strong>. By managing lead times, contractor availability, and broker engagement, we reduce turnaround times from project launch to absolute sellout.
           </p>
        </div>

        {/* Network Regions */}
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-text-primary)] tracking-wide mb-6">
          BROKER & AGENT <span className="gradient-text">NETWORK</span>
        </h3>
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
               
               <div className="space-y-3">
                 <div className="flex justify-between text-sm">
                   <span className="text-[var(--color-text-secondary)]">Registered Agents</span>
                   <span className="font-medium">{reg.agents}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-[var(--color-text-secondary)]">Verified Brokers</span>
                   <span className="font-medium">{reg.brokers}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-[var(--color-text-secondary)]">Active Leads Distributed</span>
                   <span className="font-medium text-[var(--color-accent)]">{reg.activeLeads}</span>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* SCM Value Chain visual */}
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-text-primary)] tracking-wide mb-6">
          DEVELOPMENT & DISTRIBUTION <span className="gradient-text">CHAIN</span>
        </h3>
        <div className="relative border-l border-[var(--color-border)] ml-6 md:ml-0 md:border-none md:flex md:gap-4 mb-20 space-y-8 md:space-y-0">
           {supplyChainSteps.map((step, i) => (
             <motion.div
               key={step.title}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 * i }}
               className="relative pl-8 md:pl-0 md:flex-1"
             >
               {/* Mobile dot */}
               <div className="block md:hidden absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
               
               {/* Desktop top bar layout */}
               <div className="hidden md:block h-1 bg-[var(--color-border)] mb-4 relative">
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--color-accent)] rounded-full shadow-[0_0_10px_var(--color-accent)]" />
               </div>

               <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                 Phase {i+1}: {step.title}
               </h4>
               <p className="text-sm text-[var(--color-text-secondary)]">
                 {step.desc}
               </p>
             </motion.div>
           ))}
        </div>
        
      </div>
    </main>
  );
}
