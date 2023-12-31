import * as C from './styles';
import { formatCurrrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth:string) => void;
  income: number;
  expense: number;
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}:Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate =  new Date(parseInt(year), parseInt(month) -1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}- ${currentDate.getMonth() + 1}`)
  }
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate =  new Date(parseInt(year), parseInt(month) -1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}- ${currentDate.getMonth() + 1}`)
  }
  return (
    <C.Container>
        <C.MonthArea>
            <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
            <C.MonthTitle>{formatCurrrentMonth(currentMonth)}</C.MonthTitle>
            <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
        </C.MonthArea>
        <C.ResumeArea>
            <ResumeItem title='Receitas' value={Number(income.toFixed(2))}/>
            <ResumeItem title='Despesas' value={Number(expense.toFixed(2))}/>
            <ResumeItem title='Balanço' value={Number((income - expense).toFixed(2))} color={(income-expense) < 0 ? 'red' : 'green'}/>
        </C.ResumeArea>
    </C.Container>
  );
}
