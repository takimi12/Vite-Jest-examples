import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import List from '../../components/List';
import { type Item } from '../../utils';



describe('List Component', () => {
  const mockItems: Item[] = [
    {
      id: '1',
      title: 'Test Item 1',
      description: 'Content 1',
      category: 'urgent',
    },
    {
      id: '2',
      title: 'Test Item 2',
      description: 'Content 2',
      category: 'normal',
    },
  ];
  const mockOnDelete = vi.fn();

  test('renders the Flow Board heading', () => {
    render(<List items={mockItems} onDelete={mockOnDelete} />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Flow Board' })
    ).toBeInTheDocument();
  });

//   test('renders correct number of ItemCards', () => {
//     render(<List items={mockItems} onDelete={mockOnDelete} />);

//     const cards = screen.getAllByRole('article');
//     expect(cards).toHaveLength(2);
//   });
//   //
//   test('renders empty grid when no items provided', () => {
//     render(<List items={[]} onDelete={mockOnDelete} />);
//     expect(screen.queryAllByRole('article')).toHaveLength(0);
//   });
//   // ALTERNATIVE if we want to test the number of items only in the component. Useful if there are other places where such items are rendered.

//   test('ALTERNATIVE: renders correct number of ItemCards', () => {
//     const { queryAllByRole } = render(
//       <List items={mockItems} onDelete={mockOnDelete} />
//     );
//     expect(queryAllByRole('article')).toHaveLength(2);
//   });

//   test('ALTERNATIVE: renders empty grid when no items provided', () => {
//     const { queryAllByRole } = render(
//       <List items={[]} onDelete={mockOnDelete} />
//     );
//     expect(queryAllByRole('article')).toHaveLength(0);
//   });

//   /// bez destrukturyzacji
//   test('ALTERNATIVE: renders empty grid when no items provided', () => {
//     const rendered = render(
//       <List items={[]} onDelete={mockOnDelete} />
//     );
//     const queryAllByRole = rendered.queryAllByRole;
//     expect(queryAllByRole('article')).toHaveLength(0);
//   });
});
