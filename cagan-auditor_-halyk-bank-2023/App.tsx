
import React, { useState } from 'react';

// --- Types ---
interface DiagnosticPoint {
  title: string;
  evidence: string;
  risk: string;
}

// --- Components ---

const Header = () => (
  <header className="no-print bg-white border-b border-slate-200 sticky top-0 z-10 py-4 px-6 flex justify-between items-center shadow-sm">
    <div className="flex items-center gap-3">
      <div className="bg-emerald-600 text-white p-2 rounded-lg">
        <i className="fas fa-microscope text-xl"></i>
      </div>
      <div>
        <h1 className="font-bold text-lg text-slate-800 uppercase tracking-wider">Product Transformation Auditor</h1>
        <p className="text-xs text-slate-500 font-medium">SVPG Framework Implementation v1.4</p>
      </div>
    </div>
    <button 
      onClick={() => window.print()}
      className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors flex items-center gap-2"
    >
      <i className="fas fa-print"></i> Export Memo
    </button>
  </header>
);

const MemoMetadata = () => (
  <div className="border-b-2 border-slate-800 pb-6 mb-8">
    <div className="grid grid-cols-[80px_1fr] gap-y-2 text-sm">
      <span className="font-bold text-slate-500">TO:</span>
      <span className="font-bold uppercase">Board of Directors, Halyk Bank JSC</span>
      <span className="font-bold text-slate-500">FROM:</span>
      <span className="font-semibold italic">External Product Transformation Auditor (SVPG Trained)</span>
      <span className="font-bold text-slate-500">DATE:</span>
      <span className="font-medium">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
      <span className="font-bold text-slate-500">SUBJECT:</span>
      <span className="font-bold border-b border-slate-300 inline-block pb-1 uppercase tracking-tight">Diagnostic of Product Operating Model Maturity</span>
    </div>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8 last:mb-0">
    <h2 className="memo-title text-xl text-slate-900 mb-4 border-l-4 border-emerald-600 pl-3">
      {title}
    </h2>
    <div className="text-slate-700 leading-relaxed text-sm md:text-base space-y-4">
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main className="max-w-4xl mx-auto mt-10 px-6 sm:px-12">
        <div className="bg-white p-8 sm:p-16 shadow-2xl print-shadow rounded-sm border-t-8 border-emerald-700">
          
          <MemoMetadata />

          {/* 1. EXECUTIVE SUMMARY */}
          <Section title="1. EXECUTIVE SUMMARY">
            <p>
              Halyk Bank currently presents as a <strong>"Digital Immigrant"</strong> in an advanced state of structural transition. While the organization has successfully adopted contemporary architectural constructs like <em>"Tribes"</em> and maintains top-tier engagement metrics (DAU/MAU growth of 34.9%, Annual Report p. 18), it remains tethered to a <strong>Project Operating Model</strong>.
            </p>
            <p>
              The bank acts as an <em>efficient deliverer of features</em> rather than an <em>empowered solver of problems</em>. Until the internal funding and incentive mechanisms move from project-based completion to continuous outcome-based optimization, the transition to a true Product-Led organization will remain stalled at the administrative layer.
            </p>
          </Section>

          {/* 2. EVIDENCE OF FEATURE FACTORY BEHAVIOR */}
          <Section title="2. EVIDENCE OF 'FEATURE FACTORY' BEHAVIOR (RISKS)">
            <ul className="space-y-6">
              <li className="bg-slate-50 p-4 rounded border-l-4 border-red-500">
                <p className="font-bold text-red-800 text-sm mb-1 uppercase italic">"Mercenary Incentives"</p>
                <blockquote className="text-slate-800 italic mb-2 border-slate-200 pl-4 border-l-2">
                  "Principles have been developed to reward Tribe participants based on yearly results or the **completion of a project**." 
                  <span className="text-xs font-semibold not-italic ml-2 block mt-1">— Annual Report 2023, p. 94</span>
                </blockquote>
                <p className="text-sm">
                  <strong>Risk:</strong> Rewarding "completion" incentivizes mercenaries. In Marty Cagan's framework, teams should be rewarded for <em>Outcomes</em> (e.g., increased retention), not the <em>Output</em> of a finished project. This drives a culture of "shipping junk" that satisfies internal stakeholders but may not solve customer problems.
                </p>
              </li>

              <li className="bg-slate-50 p-4 rounded border-l-4 border-red-500">
                <p className="font-bold text-red-800 text-sm mb-1 uppercase italic">"IT Functional Silo"</p>
                <blockquote className="text-slate-800 italic mb-2 border-slate-200 pl-4 border-l-2">
                  "The main goal of GovTech is to... integrate public services to **automate its internal business processes**."
                  <span className="text-xs font-semibold not-italic ml-2 block mt-1">— Sustainability Report 2023, p. 22</span>
                </blockquote>
                <p className="text-sm">
                  <strong>Risk:</strong> Treating technology as a tool for "internal automation" confirms an IT Service mindset. In a Product Model, technology <em>is</em> the business. The separate "IT Unit Departments" in the governance chart (SR p. 29) suggest technology is still viewed as a cost center serving the business "requirements."
                </p>
              </li>

              <li className="bg-slate-50 p-4 rounded border-l-4 border-red-500">
                <p className="font-bold text-red-800 text-sm mb-1 uppercase italic">"Project-Centric Governance"</p>
                <blockquote className="text-slate-800 italic mb-2 border-slate-200 pl-4 border-l-2">
                  "The Board of Directors... considered reports from the Management Board... including the Bank's technological **transformation**."
                  <span className="text-xs font-semibold not-italic ml-2 block mt-1">— Annual Report 2023, p. 57</span>
                </blockquote>
                <p className="text-sm">
                  <strong>Risk:</strong> Viewing transformation as a "project" to be reported on implies a finish line. Digital natives treat transformation as a permanent change in the <em>Product Operating Model</em>. The heavy reliance on "Agile project management" training (AR p. 88) rather than "Product Discovery" indicates a lack of emphasis on innovation over delivery.
                </p>
              </li>
            </ul>
          </Section>

          {/* 3. STRATEGIC DISCONNECTS */}
          <Section title="3. STRATEGIC DISCONNECTS">
            <p>
              The bank highlights its <strong>"Data Factory"</strong> (AR p. 100) and ecosystem rapid-fire launches (Kino.kz, Halyk Travel) as key achievements. However, there is a distinct disconnect between the <em>Innovation</em> rhetoric and the <em>Financial Allocation</em>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border border-slate-200 p-4 rounded bg-emerald-50">
                <h4 className="font-bold text-emerald-800 text-xs uppercase mb-2">Claimed Strategy</h4>
                <p className="text-sm italic">"Create a reliable, technology-driven, innovative ecosystem" (AR p. 51)</p>
              </div>
              <div className="border border-slate-200 p-4 rounded bg-amber-50">
                <h4 className="font-bold text-amber-800 text-xs uppercase mb-2">Observed Reality</h4>
                <p className="text-sm italic">Focus on "Maintenance" and "Support" staffing in the IT performance appraisal methodology (SR p. 85).</p>
              </div>
            </div>
            <p className="mt-4 text-sm">
              While digital channels saw massive MAU growth, the governance model still relies on a <strong>"Strategic Planning Committee"</strong> (AR p. 75) that conducts preliminary reviews of draft budgets—a hallmark of the project mindset that lacks the flexibility of <em>Continuous Funding</em> for persistent product teams.
            </p>
          </Section>

          {/* 4. THE PRESCRIPTION */}Section
          <Section title="4. THE PRESCRIPTION">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">1</div>
                <div>
                  <p className="font-bold text-slate-800 text-sm uppercase">Shift from Project to Persistent Funding</p>
                  <p className="text-sm text-slate-600 mt-1">Abandon annual project-based budgeting cycles for the Digital and Ecosystem units. Instead, provide stable, long-term funding to <strong>persistent product teams</strong>, allowing them the autonomy to adjust their backlogs based on continuous learning.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">2</div>
                <div>
                  <p className="font-bold text-slate-800 text-sm uppercase">Elevate Product Discovery</p>
                  <p className="text-sm text-slate-600 mt-1">Replace "Agile project management" training with intensive <strong>Product Discovery</strong> coaching. Your teams are currently <em>delivery-optimized</em>. They need to become <em>value-optimized</em> by learning how to de-risk ideas (Value, Usability, Feasibility, Viability) before they enter the sprint.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">3</div>
                <div>
                  <p className="font-bold text-slate-800 text-sm uppercase">Redefine Performance Metrics (KPI to OKR)</p>
                  <p className="text-sm text-slate-600 mt-1">Eliminate "project completion" as a performance metric for Tribes. Move to a true <strong>OKR (Objectives and Key Results)</strong> model where the Management Board sets strategic objectives and the Tribes define the results (Outcomes) they will achieve to meet those objectives.</p>
                </div>
              </div>
            </div>
          </Section>

          {/* FOOTER */}
          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
            <p>This diagnostic is based on Marty Cagan's <em>TRANSFORMED</em> framework.</p>
            <p className="mt-1">Confidential Audit Report for internal use by Halyk Bank Board of Directors only.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
