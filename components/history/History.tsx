import React from 'react';
import { History as HistoryInterface } from '@/interfaces/history';
import { Prompt } from '@/components/prompt';

interface Props {
  history: Array<HistoryInterface>;
}

export const History: React.FC<Props> = ({ history }) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <Prompt />
          {entry.command}
          <p
            className="m-2"
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default History;
