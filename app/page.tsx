'use client'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // Hero entrance
      const heroTl = gsap.timeline({ delay: 0.25 })
      heroTl
        .from('#heyebrow', { opacity: 0, y: 14, duration: 0.5, ease: 'power2.out' })
        .from('#hh1', { opacity: 0, y: 36, duration: 0.85, ease: 'power3.out' }, '-=.2')
        .from('#hsub', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' }, '-=.4')
        .from('#hact', { opacity: 0, y: 16, duration: 0.5, ease: 'power2.out' }, '-=.35')
        .from('#htrust', { opacity: 0, y: 12, duration: 0.4, ease: 'power2.out' }, '-=.25')
        .from('#hmock', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' }, '-=.5')

      // Pipeline steps stagger on scroll
      ScrollTrigger.create({
        trigger: '.pc-timeline',
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.from(['#ps1', '#ps2', '#ps3', '#ps4'], {
            opacity: 0, x: -12, duration: 0.4, stagger: 0.15, ease: 'power2.out',
          })
        },
      })

      // Scroll reveals
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 24 }, {
          opacity: 1, y: 0, duration: 0.65, ease: 'power2.out',
          delay: (i % 3) * 0.08,
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })

      // Feature grid stagger
      gsap.utils.toArray<HTMLElement>('.feat-item').forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: i * 0.06,
          scrollTrigger: { trigger: '.feat-grid', start: 'top 85%', once: true },
        })
      })

      // Stats counters
      document.querySelectorAll<HTMLElement>('.sn[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target || '0')
        const suffix = el.dataset.suffix || ''
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target, duration: 1.8, ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.round(obj.val) + suffix },
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      ScrollTrigger.create({
        start: 80,
        onEnter: () => {
          const nav = document.querySelector('nav') as HTMLElement | null
          if (nav) nav.style.boxShadow = '0 2px 20px rgba(13,27,42,0.08)'
        },
        onLeaveBack: () => {
          const nav = document.querySelector('nav') as HTMLElement | null
          if (nav) nav.style.boxShadow = 'none'
        },
      })
    }
    init()
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nlogo">Rostr<span>.</span></div>
        <ul className="nlinks">
          <li><a href="#how">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#who">Who it&apos;s for</a></li>
        </ul>
        <a href="#cta" className="ncta">Hire Nigerian talent</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow" id="heyebrow">Employer of Record · Nigeria</div>
            <h1 id="hh1">The easiest way to hire and pay Nigerian talent. <em>Legally.</em></h1>
            <p className="hero-sub" id="hsub">No Nigerian entity required. Rostr acts as the <strong>Employer of Record</strong> — handling contracts, tax compliance, and multi-currency payroll — so you can hire in Lagos from anywhere in the world.</p>
            <div className="hero-actions" id="hact">
              <a href="#cta" className="btn-coral">Hire your first engineer →</a>
              <a href="#how" className="btn-outline">See how it works</a>
            </div>
            <div className="hero-trust" id="htrust">
              <div className="trust-logos">
                <span className="trust-pill">CBN Compliant</span>
                <span className="trust-pill">FIRS Registered</span>
                <span className="trust-pill">ISO 27001</span>
              </div>
              <div className="trust-text">Trusted by 340+ global companies</div>
            </div>
          </div>

          {/* PIPELINE MOCKUP */}
          <div className="pipeline-wrap reveal" id="hmock">
            <div className="pipeline-float">New hire · In progress</div>
            <div className="pipeline-card">
              <div className="pc-header">
                <div className="pc-logo">Rostr<span>.</span></div>
                <div className="pc-badge">HIRE-2048</div>
              </div>
              <div className="pc-candidate">
                <div className="pc-av">AO</div>
                <div>
                  <div className="pc-name">Amara Okafor</div>
                  <div className="pc-role">Senior Frontend Engineer</div>
                  <div className="pc-location">📍 Lagos, Nigeria</div>
                </div>
              </div>
              <div className="pc-timeline">
                <div className="pc-step" id="ps1">
                  <div className="pcs-icon pcs-done">✓</div>
                  <div className="pcs-body">
                    <div className="pcs-label">Hire request submitted</div>
                    <div className="pcs-sub">Role, salary, and start date confirmed</div>
                  </div>
                  <div className="pcs-day">Day 1</div>
                </div>
                <div className="pc-step" id="ps2">
                  <div className="pcs-icon pcs-done">✓</div>
                  <div className="pcs-body">
                    <div className="pcs-label">Compliance cleared</div>
                    <div className="pcs-sub">Tax registration and legal checks complete</div>
                  </div>
                  <div className="pcs-day">Day 2</div>
                </div>
                <div className="pc-step" id="ps3">
                  <div className="pcs-icon pcs-done">✓</div>
                  <div className="pcs-body">
                    <div className="pcs-label">Contract signed</div>
                    <div className="pcs-sub">E-signed employment agreement sent and returned</div>
                  </div>
                  <div className="pcs-day">Day 3</div>
                </div>
                <div className="pc-step" id="ps4">
                  <div className="pcs-icon pcs-active">⟳</div>
                  <div className="pcs-body">
                    <div className="pcs-label pcs-active-label">Onboarding in progress</div>
                    <div className="pcs-sub">Benefits enrolled · Equipment ordered</div>
                  </div>
                  <div className="pcs-day">Day 5</div>
                </div>
              </div>
              <div className="pc-footer">
                <div className="pc-footer-left">$3,500/month · USD payroll</div>
                <div className="pc-footer-right">Onboarding on track ↗</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat"><div className="sn" data-target="5" data-suffix=" days">0</div><div className="sl">Average time to onboard a new hire</div></div>
          <div className="stat"><div className="sn" data-target="340" data-suffix="+">0</div><div className="sl">Global companies hiring through Rostr</div></div>
          <div className="stat"><div className="sn" data-target="2100" data-suffix="+">0</div><div className="sl">Nigerian engineers and operators hired</div></div>
          <div className="stat"><div className="sn">49</div><div className="sl">Currencies supported for payroll</div></div>
        </div>
      </div>

      {/* PROBLEM */}
      <div className="prob-bg">
        <div className="sw">
          <div className="sh">
            <div className="slbl reveal">The problem</div>
            <h2 className="reveal">Hiring Nigerian talent is <em>harder than it should be.</em></h2>
            <p className="reveal">The talent is world-class. The infrastructure to hire it legally hasn&apos;t kept up. Until now.</p>
          </div>
          <div className="prob-grid">
            <div className="prob-card reveal">
              <div className="prob-num">// 01 — Entity</div>
              <h3>You need a Nigerian entity to hire legally</h3>
              <p>Registering a business entity in Nigeria can take 3–6 months, costs significant legal fees, and requires ongoing compliance management you&apos;re not set up for.</p>
              <span className="prob-tag">Time to hire: 3–6 months</span>
            </div>
            <div className="prob-card reveal">
              <div className="prob-num">// 02 — Compliance</div>
              <h3>Tax and labour law is complex and local</h3>
              <p>PAYE, pension contributions, NHF, NSITF — Nigerian payroll compliance has layers. Getting it wrong exposes you to penalties and puts your employee at risk.</p>
              <span className="prob-tag">4+ compliance requirements</span>
            </div>
            <div className="prob-card reveal">
              <div className="prob-num">// 03 — Payroll</div>
              <h3>International transfers are slow and expensive</h3>
              <p>Paying a Nigerian employee via wire transfer costs 5–8% in fees and takes 3–5 days. That&apos;s not how you build trust with your best engineers.</p>
              <span className="prob-tag">Up to 8% in fees</span>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="how-bg" id="how">
        <div className="sw">
          <div className="sh">
            <div className="slbl reveal">How it works</div>
            <h2 className="reveal">From offer letter to <em>day one in 5 days.</em></h2>
            <p className="reveal">We handle everything between your hiring decision and your new employee&apos;s first day. You stay focused on building.</p>
          </div>
          <div className="timeline">
            <div className="tl-step reveal">
              <div className="tl-num">1</div>
              <h3>Submit hire request</h3>
              <p>Tell us who you&apos;re hiring, their salary, currency, and start date. Takes 5 minutes.</p>
              <span className="tl-badge">Day 1</span>
            </div>
            <div className="tl-step reveal">
              <div className="tl-num">2</div>
              <h3>Compliance cleared</h3>
              <p>We run tax registration, right-to-work verification, and all legal checks on your behalf.</p>
              <span className="tl-badge">Day 2</span>
            </div>
            <div className="tl-step active reveal">
              <div className="tl-num">3</div>
              <h3>Contract signed</h3>
              <p>Employment agreement drafted, localised for Nigerian law, and e-signed by both parties.</p>
              <span className="tl-badge">Day 3</span>
            </div>
            <div className="tl-step reveal">
              <div className="tl-num">4</div>
              <h3>Employee onboarded</h3>
              <p>Benefits enrolled, payroll set up, equipment ordered. Your new hire is ready for day one.</p>
              <span className="tl-badge">Day 5</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="feat-bg" id="features">
        <div className="sw">
          <div className="sh">
            <div className="slbl reveal">Features</div>
            <h2 className="reveal">Everything between offer and <em>first payslip.</em></h2>
            <p className="reveal">Rostr isn&apos;t just a payroll tool. It&apos;s the entire employment infrastructure for your Nigerian team.</p>
          </div>
          <div className="feat-grid reveal">
            <div className="feat-item"><div className="feat-icon">🏛️</div><h3>Employer of Record</h3><p>We are the legal employer. No Nigerian entity required on your side. We carry the compliance risk so you don&apos;t have to.</p></div>
            <div className="feat-item"><div className="feat-icon">📄</div><h3>Digital contracts</h3><p>Nigerian-law-compliant employment agreements drafted, localised, and e-signed. Stored securely and accessible anytime.</p></div>
            <div className="feat-item"><div className="feat-icon">💱</div><h3>Multi-currency payroll</h3><p>Pay in USD, GBP, EUR, or NGN. Your employee sees their payslip in their local currency. Payouts hit their bank account on time, every time.</p></div>
            <div className="feat-item"><div className="feat-icon">💳</div><h3>Earned wage access</h3><p>Your Nigerian employees can access up to 50% of their earned salary before payday. A benefit that matters — at no cost to you.</p></div>
            <div className="feat-item"><div className="feat-icon">📋</div><h3>Tax &amp; compliance automation</h3><p>PAYE, pension (PFA), NHF, and NSITF handled automatically. We file, we remit, we report. You get a clean audit trail.</p></div>
            <div className="feat-item"><div className="feat-icon">🚀</div><h3>5-day onboarding</h3><p>From signed offer to fully onboarded employee in 5 days. Our record is 48 hours. Your engineers don&apos;t wait around for paperwork.</p></div>
          </div>
        </div>
      </div>

      {/* WHO IT'S FOR */}
      <div className="who-bg" id="who">
        <div className="sw">
          <div className="sh">
            <div className="slbl reveal">Who it&apos;s for</div>
            <h2 className="reveal">Two types of companies. <em>One solution.</em></h2>
          </div>
          <div className="who-grid">
            <div className="who-card reveal">
              <span className="who-tag">Global companies</span>
              <h3>Hiring Nigerian talent from abroad</h3>
              <p>You&apos;ve found a brilliant engineer, designer, or operator in Lagos. You want to hire them legally, pay them fairly, and give them real employment benefits — without spending 6 months registering a local entity.</p>
              <ul className="who-list">
                <li>No Nigerian entity required — ever</li>
                <li>Pay in USD, GBP, or EUR — we handle FX</li>
                <li>Full compliance with Nigerian labour law</li>
                <li>Terminate cleanly with Rostr handling severance</li>
              </ul>
            </div>
            <div className="who-card featured reveal">
              <span className="who-tag">Nigerian startups</span>
              <h3>Managing a distributed Nigerian team</h3>
              <p>Your team is remote across Lagos, Abuja, and Port Harcourt. You need compliant employment contracts, structured payroll, and employee benefits — without building an entire HR department from scratch.</p>
              <ul className="who-list">
                <li>Compliant employment for every team member</li>
                <li>Structured payroll with pension and PAYE handled</li>
                <li>Earned wage access as an employee benefit</li>
                <li>HR infrastructure from day one of hiring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="testi-bg">
        <div className="sw">
          <div className="sh">
            <div className="slbl reveal">What companies say</div>
            <h2 className="reveal">They hired in Lagos. <em>From everywhere else.</em></h2>
          </div>
          <div className="testi-grid">
            <div className="tcard reveal">
              <div className="tmark">&ldquo;</div>
              <p className="ttext">We hired three senior engineers from Lagos in the space of two weeks. Each one was fully onboarded, contracted, and paid — legally — without us having to set up a Nigerian entity. Rostr made the decision to hire in Nigeria a no-brainer.</p>
              <div className="tauthor">
                <div className="tav">JW</div>
                <div>
                  <div className="tname">James Whitfield</div>
                  <div className="trole">CTO, BuildStack · London, UK</div>
                </div>
              </div>
            </div>
            <div className="tcard reveal">
              <div className="tmark">&ldquo;</div>
              <p className="ttext">Running payroll across Lagos and Abuja manually was a compliance nightmare. Rostr took over the whole thing — pension, PAYE, NHF — everything. Our HR team went from spending two weeks a month on payroll to two hours. It&apos;s not comparable.</p>
              <div className="tauthor">
                <div className="tav">AA</div>
                <div>
                  <div className="tname">Adaeze Achike</div>
                  <div className="trole">Head of People, TradeFlow · Lagos, Nigeria</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="pricing-bg" id="pricing">
        <div className="sw">
          <div className="sh">
            <div className="slbl reveal">Pricing</div>
            <h2 className="reveal">Flat fees. <em>No surprises.</em></h2>
            <p className="reveal">Every plan includes full compliance, payroll, and contracts. No percentage of salary, no hidden charges.</p>
          </div>
          <div className="pricing-grid">
            <div className="pcard reveal">
              <div className="ptier">EOR Starter</div>
              <div className="pamt">$199 <span>/ employee / mo</span></div>
              <div className="psub">+ 1.5% payroll processing</div>
              <div className="pdesc">For small teams hiring their first Nigerian employees. Everything you need to stay compliant.</div>
              <ul className="plist">
                <li><span className="pchk">✓</span>Employer of Record</li>
                <li><span className="pchk">✓</span>Employment contracts</li>
                <li><span className="pchk">✓</span>PAYE &amp; pension filing</li>
                <li><span className="pchk">✓</span>Multi-currency payroll</li>
                <li><span className="pchk">✓</span>Up to 10 employees</li>
              </ul>
              <a href="#cta" className="pcta pcta-out">Get started →</a>
            </div>
            <div className="pcard feat reveal">
              <div className="pop-badge">Most popular</div>
              <div className="ptier">EOR Growth</div>
              <div className="pamt">$149 <span>/ employee / mo</span></div>
              <div className="psub">+ 1.0% payroll processing</div>
              <div className="pdesc">For growing teams with multiple Nigerian hires and ongoing payroll needs.</div>
              <ul className="plist">
                <li><span className="pchk">✓</span>Everything in Starter</li>
                <li><span className="pchk">✓</span>Earned wage access</li>
                <li><span className="pchk">✓</span>Unlimited employees</li>
                <li><span className="pchk">✓</span>Priority onboarding (48h)</li>
                <li><span className="pchk">✓</span>Dedicated account manager</li>
              </ul>
              <a href="#cta" className="pcta pcta-solid">Get started →</a>
            </div>
            <div className="pcard reveal">
              <div className="ptier">Payroll Only</div>
              <div className="pamt">$49 <span>/ employee / mo</span></div>
              <div className="psub">For companies with an existing Nigerian entity</div>
              <div className="pdesc">You have the entity. Let Rostr handle PAYE, pension, and payroll processing every month.</div>
              <ul className="plist">
                <li><span className="pchk">✓</span>Monthly payroll processing</li>
                <li><span className="pchk">✓</span>PAYE &amp; statutory filing</li>
                <li><span className="pchk">✓</span>Payslip generation</li>
                <li><span className="pchk">✓</span>Earned wage access</li>
              </ul>
              <a href="#cta" className="pcta pcta-out">Get started →</a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-wrap" id="cta">
        <div className="cta-blob"></div>
        <div className="cta-inner">
          <div className="cta-lbl">Start hiring</div>
          <h2 className="reveal">Your next great hire is in Lagos. <em>We&apos;ll handle everything else.</em></h2>
          <p className="reveal">Submit your first hire request in 5 minutes. Onboarded in 5 days. Compliant from day one.</p>
          <a href="#" className="btn-coral reveal" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }}>Hire Nigerian talent →</a>
          <div className="cta-note reveal">No entity required · Free to start · First hire onboarded in 5 days</div>
        </div>
      </div>

      <footer>
        <div className="fi">
          <div className="flogo">Rostr<span>.</span></div>
          <div className="fcopy">© 2025 Rostr Technologies Ltd. · Lagos, Nigeria</div>
          <ul className="flinks">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
