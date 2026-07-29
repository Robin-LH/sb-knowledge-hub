'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';

export default function FeedbackWidget() {
  const [voted, setVoted] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null);

  const handleVote = (type: 'yes' | 'no') => {
    setFeedback(type);
    setVoted(true);
    // Here we would typically send analytics to our backend
  };

  return (
    <div className="my-8 rounded-xl border border-fd-border bg-fd-card p-6 shadow-sm transition-all duration-200">
      {!voted ? (
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-medium text-fd-foreground">Was this article helpful?</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleVote('yes')}
              className="flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background px-4 py-2 text-sm font-medium text-fd-muted-foreground transition-all hover:border-emerald-500/30 hover:bg-emerald-50/50 hover:text-emerald-600 dark:hover:bg-emerald-950/20"
              aria-label="Mark this page as helpful"
            >
              <ThumbsUp className="h-4 w-4" />
              <span>Yes</span>
            </button>
            <button
              onClick={() => handleVote('no')}
              className="flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background px-4 py-2 text-sm font-medium text-fd-muted-foreground transition-all hover:border-rose-500/30 hover:bg-rose-50/50 hover:text-rose-600 dark:hover:bg-rose-950/20"
              aria-label="Mark this page as not helpful"
            >
              <ThumbsDown className="h-4 w-4" />
              <span>No</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 animate-fade-in">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            {feedback === 'yes'
              ? 'Thank you! We are glad you found this article helpful.'
              : 'Thank you for your feedback. We will work to improve this page.'}
          </p>
        </div>
      )}
    </div>
  );
}
