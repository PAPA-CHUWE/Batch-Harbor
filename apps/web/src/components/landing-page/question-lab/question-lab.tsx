"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { engineeringQuestions, focusRecommendations, type EngineeringFocus } from "@/data/questions";

export function QuestionLab() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [step, setStep] = useState(0);
  const complete = step >= engineeringQuestions.length;
  const question = engineeringQuestions[step];
  const selectedAnswer = question && answers[step] !== undefined ? question.answers[answers[step]] : undefined;
  const progress = (Math.min(step + 1, engineeringQuestions.length) / engineeringQuestions.length) * 100;
  const score = answers.reduce((total, answerIndex, questionIndex) => {
    return total + (engineeringQuestions[questionIndex]?.answers[answerIndex]?.isCorrect ? 1 : 0);
  }, 0);

  const chooseAnswer = (answerIndex: number) => {
    const nextAnswers = answers.slice(0, step);
    nextAnswers[step] = answerIndex;
    setAnswers(nextAnswers);
  };

  const recommendation = (() => {
    const counts: Record<EngineeringFocus, number> = { data: 0, ai: 0, product: 0, reliability: 0 };
    answers.forEach((answerIndex, questionIndex) => {
      const focus = engineeringQuestions[questionIndex]?.answers[answerIndex]?.focus;
      if (focus) counts[focus] += 1;
    });
    const focus = (Object.keys(counts) as EngineeringFocus[]).reduce((best, item) => counts[item] > counts[best] ? item : best, "data");
    return focusRecommendations[focus];
  })();

  const startOver = () => {
    setAnswers([]);
    setStep(0);
  };

  return (
    <section id="question-lab" className="bg-[#F8F8FC] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B00]">Interactive Engineering Lab</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#191970] sm:text-5xl">The Engineering Mindset</h2>
          <p className="mt-4 text-lg font-semibold text-[#191970]">Five questions. A different way to think about technology.</p>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#5D5D7D]">Explore the trade-offs behind everyday engineering decisions. There are no scores here—just useful perspectives to take back to your team.</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#191970]/10 bg-white p-6 shadow-[0_20px_70px_rgba(25,25,112,0.07)] sm:p-10">
          <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.14em] text-[#777747]">
            <span>{complete ? "Your engineering focus" : "Progress"}</span>
            <span className="text-[#191970]">{complete ? `${score} / ${engineeringQuestions.length} correct` : `Question ${step + 1} of ${engineeringQuestions.length} · Score ${score} / ${engineeringQuestions.length}`}</span>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#191970]/10" role="progressbar" aria-label="Question progress" aria-valuemin={1} aria-valuemax={engineeringQuestions.length} aria-valuenow={complete ? engineeringQuestions.length : step + 1}>
            <div className="h-full rounded-full bg-[#EFBF04] transition-[width] duration-500" style={{ width: `${complete ? 100 : progress}%` }} />
          </div>

          {complete ? (
            <div className="pt-9" aria-live="polite">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B00]">A pattern in your answers</p>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-[#191970] sm:text-4xl">Your strongest focus is {recommendation.title.toLowerCase()}.</h3>
              <p className="mt-4 max-w-2xl leading-7 text-[#5D5D7D]">{recommendation.description}</p>
              <p className="mt-5 text-lg font-bold text-[#191970]">You got {score} out of {engineeringQuestions.length} correct.</p>
              <div className="mt-7 rounded-2xl bg-[#FFFADE] p-5 text-sm leading-6 text-[#191970]">Your choices are a conversation starter, not a score. The right approach always depends on your team, constraints, and goals.</div>
              <div className="mt-8">
                <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-[#191970]">Engineering principles explored</h4>
                <ul className="mt-4 space-y-3">
                  {engineeringQuestions.map((item, index) => (
                    <li key={item.id} className="flex gap-3 text-sm leading-6 text-[#5D5D7D]">
                      <span className="font-bold text-[#9B7B00]">{String(index + 1).padStart(2, "0")}</span>
                      <span>{item.principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href={recommendation.href} className="inline-flex w-fit items-center gap-2 rounded-full bg-[#EFBF04] px-5 py-3 text-sm font-bold text-[#191970] transition hover:bg-[#e2b400] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191970]">{recommendation.linkLabel}<ArrowRight size={16} /></Link>
                <button type="button" onClick={startOver} className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-[#191970] hover:bg-[#191970]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191970]"><RotateCcw size={15} />Start again</button>
              </div>
            </div>
          ) : (
            <div className="pt-9" aria-live="polite">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B00]">{question.category}</p>
              <h3 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-[#191970] sm:text-3xl">{question.prompt}</h3>
              <div className="mt-7 grid gap-3">
                {question.answers.map((answer, index) => {
                  const selected = answers[step] === index;
                  const isCorrect = answer.isCorrect;
                  const showFeedback = selectedAnswer !== undefined;
                  return (
                    <button key={answer.label} type="button" aria-pressed={selected} onClick={() => chooseAnswer(index)} className={`group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition sm:p-5 ${showFeedback && isCorrect ? "border-emerald-600 bg-emerald-50" : showFeedback && selected ? "border-rose-600 bg-rose-50" : selected ? "border-[#EFBF04] bg-[#FFFADE]" : "border-[#191970]/10 bg-white hover:border-[#EFBF04] hover:bg-[#FFFADE]/60"} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191970]`}>
                      <span className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${showFeedback && isCorrect ? "bg-emerald-600 text-white" : showFeedback && selected ? "bg-rose-600 text-white" : selected ? "bg-[#EFBF04] text-[#191970]" : "bg-[#191970]/[0.06] text-[#191970]"}`}>{String.fromCharCode(65 + index)}</span>
                      <span className="pt-1 text-sm font-semibold leading-6 text-[#191970] sm:text-base">{answer.label}</span>
                      {showFeedback && isCorrect && <span className="ml-auto pt-1 text-xs font-bold uppercase tracking-wide text-emerald-700">Best answer</span>}
                    </button>
                  );
                })}
              </div>
              {selectedAnswer && (
                <div className={`mt-6 rounded-2xl border-l-4 p-5 ${selectedAnswer.isCorrect ? "border-emerald-600 bg-emerald-50" : "border-rose-600 bg-rose-50"}`} aria-live="polite">
                  <p className={`text-sm font-extrabold uppercase tracking-[0.12em] ${selectedAnswer.isCorrect ? "text-emerald-800" : "text-rose-800"}`}>{selectedAnswer.isCorrect ? "Correct!" : `Not quite. The best answer is ${String.fromCharCode(65 + question.answers.findIndex((answer) => answer.isCorrect))}.`}</p>
                  <p className="mt-2 leading-7 text-[#191970]">{selectedAnswer.insight} {question.principle}</p>
                </div>
              )}
              <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#191970]/10 pt-6">
                <button type="button" disabled={step === 0} onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-[#191970] hover:bg-[#191970]/5 disabled:invisible"><ArrowLeft size={16} />Previous</button>
                <div className="flex items-center gap-2">
                  {selectedAnswer && !selectedAnswer.isCorrect && <button type="button" onClick={() => { const nextAnswers = answers.slice(0, step); setAnswers(nextAnswers); }} className="rounded-full border border-[#191970]/15 px-4 py-3 text-sm font-bold text-[#191970] hover:bg-[#191970]/5">Try again</button>}
                  {selectedAnswer && <button type="button" onClick={() => setStep(step + 1)} className="inline-flex items-center gap-2 rounded-full bg-[#191970] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#29297b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EFBF04]">{step === engineeringQuestions.length - 1 ? "See my recommendation" : "Next question"}<ArrowRight size={16} /></button>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
