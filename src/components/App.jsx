import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <div>
      <Feedback
        initialGood={0}
        initialNeutral={0}
        initialBad={0}
        initialTotalFeedback={0}
        initialPercentageFeedback={0}
      />
    </div>
  );
};
