import { it, expect, describe } from 'vitest'
import { splitTodosIntoDays} from './list'


describe('splitTodosIntoDays', () => {
    it('should correctly split todos by days', () => {
        const todos = [
            { id: 1, day: 'mo', text: 'Måndag uppgift 1' },
            { id: 2, day: 'ti', text: 'Tisdag uppgift 1' },
            { id: 3, day: 'mo', text: 'Måndag uppgift 2' },
            { id: 4, day: 'fr', text: 'Fredag uppgift 1' }
        ];

        const [mo, ti, on, to, fr, sa, su] = splitTodosIntoDays(todos);

        expect(mo).toEqual([
            { id: 1, day: 'mo', text: 'Måndag uppgift 1' },
            { id: 3, day: 'mo', text: 'Måndag uppgift 2' }
        ]);
        expect(ti).toEqual([{ id: 2, day: 'ti', text: 'Tisdag uppgift 1' }]);
        expect(fr).toEqual([{ id: 4, day: 'fr', text: 'Fredag uppgift 1' }]);
        expect(on).toEqual([]);
        expect(to).toEqual([]);
        expect(sa).toEqual([]);
        expect(su).toEqual([]);
    });

    it('should return empty arrays for days with no todos', () => {
        const todos = [];

        const [mo, ti, on, to, fr, sa, su] = splitTodosIntoDays(todos);

        expect(mo).toEqual([]);
        expect(ti).toEqual([]);
        expect(on).toEqual([]);
        expect(to).toEqual([]);
        expect(fr).toEqual([]);
        expect(sa).toEqual([]);
        expect(su).toEqual([]);
    });
});
