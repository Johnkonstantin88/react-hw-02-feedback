import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <List>
      <li>
        <Button onClick={onLeaveGoodFeedback}>Good</Button>
      </li>
      <li>
        <Button onClick={onLeaveNeutralFeedback}>Neutral</Button>
      </li>
      <li>
        <Button onClick={onLeaveBadFeedback}>Bad</Button>
      </li>
    </List>
  );
};
