import { weekdays } from './weekdays';

describe('weekdays', () => {
    it('should have 7 days', () => {
        expect(weekdays).toHaveLength(7);
    });

    it('should contain the correct days and names', () => {
        const expectedWeekdays = [
            { key: 'mo', name: 'Måndag' },
            { key: 'ti', name: 'Tisdag' },
            { key: 'on', name: 'Onsdag' },
            { key: 'to', name: 'Torsdag' },
            { key: 'fr', name: 'Fredag' },
            { key: 'sa', name: 'Lördag' },
            { key: 'su', name: 'Söndag' }
        ];

        expect(weekdays).toEqual(expectedWeekdays);
    });

    it('each day should have a key and name', () => {
        weekdays.forEach(day => {
            expect(day).toHaveProperty('key');
            expect(day).toHaveProperty('name');
        });
    });
});
