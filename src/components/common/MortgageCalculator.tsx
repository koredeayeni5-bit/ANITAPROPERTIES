import React, { useState, useId } from 'react';
import { Calculator, MessageSquare, ShieldAlert } from 'lucide-react';
import { AGENT_CONFIG } from '../../config/agentInfo';

export const MortgageCalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(250000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [loanTermYears, setLoanTermYears] = useState<number>(15);
  const [interestRate, setInterestRate] = useState<number>(18);

  const priceInputId = useId();
  const downPaymentSliderId = useId();
  const tenureSliderId = useId();
  const interestSliderId = useId();

  // Calculations
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanPrincipal = propertyPrice - downPaymentAmount;

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const monthlyRepayment =
    monthlyInterestRate > 0
      ? (loanPrincipal *
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
      : loanPrincipal / numberOfPayments;

  const totalPayment = monthlyRepayment * numberOfPayments;
  const totalInterest = totalPayment - loanPrincipal;

  const formatNaira = (amount: number) => {
    return '₦' + Math.round(amount).toLocaleString('en-NG');
  };

  const handleDiscussOnWhatsApp = () => {
    const text = `Hello Anita,\n\nI was using the financial mortgage calculator on your website for an Abuja property priced at ${formatNaira(
      propertyPrice
    )}.\n\nEstimated Down Payment (${downPaymentPercent}%): ${formatNaira(
      downPaymentAmount
    )}\nLoan Tenure: ${loanTermYears} Years\nEstimated Monthly Repayment: ${formatNaira(
      monthlyRepayment
    )}\n\nCould you advise on developer payment plans or financing options for this budget?`;

    const url = `https://wa.me/${AGENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-sm border border-stone-200/90 shadow-sm p-6 sm:p-10 max-w-4xl mx-auto my-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F4] border border-[#C5A880]/50 text-[#9E773A] text-xs font-semibold uppercase tracking-wider rounded-sm mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>Abuja Real Estate Advisory</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
          Property Payment & Mortgage Estimator
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
          Estimate monthly mortgage obligations or flexible developer milestone payments for Abuja residential and commercial acquisitions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders and Inputs Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Property Price */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor={priceInputId} className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                Property Price (₦)
              </label>
              <span className="font-serif font-bold text-stone-900 text-base">
                {formatNaira(propertyPrice)}
              </span>
            </div>
            <input
              id={priceInputId}
              type="range"
              min={20000000}
              max={1500000000}
              step={10000000}
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full accent-[#C5A880] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-stone-400 mt-1">
              <span>₦20M</span>
              <span>₦500M</span>
              <span>₦1.5B</span>
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor={downPaymentSliderId} className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                Down Payment: {downPaymentPercent}%
              </label>
              <span className="font-serif font-bold text-[#9E773A] text-sm">
                {formatNaira(downPaymentAmount)}
              </span>
            </div>
            <input
              id={downPaymentSliderId}
              type="range"
              min={10}
              max={70}
              step={5}
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full accent-[#C5A880] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-stone-400 mt-1">
              <span>10% (Minimum)</span>
              <span>30% (Standard)</span>
              <span>70%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor={tenureSliderId} className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                Tenure / Loan Term
              </label>
              <span className="font-serif font-bold text-stone-900 text-sm">
                {loanTermYears} Years ({numberOfPayments} Months)
              </span>
            </div>
            <input
              id={tenureSliderId}
              type="range"
              min={3}
              max={25}
              step={1}
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(Number(e.target.value))}
              className="w-full accent-[#C5A880] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-stone-400 mt-1">
              <span>3 Yrs (Developer Plan)</span>
              <span>15 Yrs (Mortgage)</span>
              <span>25 Yrs</span>
            </div>
          </div>

          {/* Estimated Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor={interestSliderId} className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                Annual Interest Rate
              </label>
              <span className="font-serif font-bold text-stone-900 text-sm">
                {interestRate}% p.a.
              </span>
            </div>
            <input
              id={interestSliderId}
              type="range"
              min={10}
              max={28}
              step={0.5}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-[#C5A880] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-stone-400 mt-1">
              <span>10% (Federal Mortgage NHF)</span>
              <span>18% (Commercial)</span>
              <span>28%</span>
            </div>
          </div>
        </div>

        {/* Results Card Column (5 cols) */}
        <div className="lg:col-span-5 bg-[#111315] text-white p-6 sm:p-7 rounded-sm border border-stone-800 shadow-xl space-y-5">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block mb-1">
              Estimated Monthly Repayment
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#C5A880]">
              {formatNaira(monthlyRepayment)}
              <span className="text-xs font-sans text-stone-400 font-normal ml-1">/ month</span>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-4 space-y-3 text-xs">
            <div className="flex justify-between text-stone-300">
              <span>Principal Loan:</span>
              <span className="font-semibold text-white">{formatNaira(loanPrincipal)}</span>
            </div>

            <div className="flex justify-between text-stone-300">
              <span>Required Down Payment:</span>
              <span className="font-semibold text-[#C5A880]">{formatNaira(downPaymentAmount)}</span>
            </div>

            <div className="flex justify-between text-stone-300">
              <span>Total Interest Payable:</span>
              <span className="font-semibold text-white">{formatNaira(totalInterest)}</span>
            </div>

            <div className="flex justify-between text-stone-300 pt-2 border-t border-stone-800 font-medium">
              <span>Total Estimated Outlay:</span>
              <span className="font-bold text-white text-sm">{formatNaira(totalPayment)}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleDiscussOnWhatsApp}
              className="w-full py-3 px-4 bg-[#C5A880] hover:bg-[#B89355] text-[#0B0C0E] font-bold text-xs rounded-sm shadow-sm flex items-center justify-center gap-2 transition-all tap-target"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Discuss Payment Plan on WhatsApp</span>
            </button>
          </div>

          <div className="text-[10px] text-stone-400 flex items-start gap-1.5 leading-snug">
            <ShieldAlert className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
            <span>Estimates for guidance only. Developer milestone payment terms and mortgage qualifications are finalized directly with Anita.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
