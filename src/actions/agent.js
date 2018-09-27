import uuid from 'uuid';

export const agentContact = (
    {
        name = '',
        phoneNumber = '',
        mail='',
        img='',
    } = {}
) => ({
    type: 'AGENT_INFO',
    info: {
        id: uuid(),
        name,
        phoneNumber,
        mail,
        img,
    }
});