import uuid from 'uuid';

export const addHousing = (
    {
        title = '',
        description = '',
        price = 0,
        img = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_HOUSING',
    housing: {
        id: uuid(),
        title,
        description,
        price,
        img,
        createdAt
    }
});