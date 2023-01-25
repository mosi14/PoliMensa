
export default class API {

    static rootApiUrl = 'http://localhost:3001/api/';

    static getUser = async (userId) => {

        const response = await fetch(this.rootApiUrl + 'users/' + userId);

        const user = await response.json();

        if (response.ok) {
            return user;
        } else {
            throw user;  // an object with the error coming from the server
        }
    };

    static getFoods = async (type) => {

        const response = await fetch(this.rootApiUrl + 'foods/?' + new URLSearchParams({
            type: type
        }));

        const user = await response.json();

        if (response.ok) {
            return user;
        } else {
            throw user;  // an object with the error coming from the server
        }
    };

    static getTimes = async (type) => {

        const response = await fetch(this.rootApiUrl + 'times/?' + new URLSearchParams({type: type }));

        const times = await response.json();

        if (response.ok) {
            return times;
        } else {
            throw times;  // an object with the error coming from the server
        }
    };

    static cancelOrder = async (userId) => {

        const response = await fetch(this.rootApiUrl + 'orders/' + userId, {
            method: 'DELETE'
        });

        if (response.ok) {
            return true;
        } else {
            throw false;
        }
    };

    static saveOrder = async (user, timeId) => {

        const response = await fetch(this.rootApiUrl + 'times/' + timeId);

        const time = await response.json();

        if (response.ok) {

            const response = await fetch(this.rootApiUrl + 'users/save-order', {
                method: 'POST',
                headers: {
                    // 'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: user.id,
                    timeId: time.id,
                    timeSlot: time.time_slot,
                })
            });

            if (response.ok)
                console.log('saved');

            return time;
        } else {
            throw false;
        }
    };

    static pay = async (user, amount) => {

        const response = await fetch(this.rootApiUrl + 'users/pay', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: user.id,
                amount: amount
            })
        });

        if (response.ok) {
            return true;
        } else {
            throw false;
        }
    };
}


// export {
//     getCurrentSession,
//     logIn,
//     getAllRiddles,
//     logOut,
//     saveRiddle,
//     getRiddle,
//     getRiddleReplies,
//     saveRiddleReply,
//     updateCloseRiddle,
//     getTop3Users
// }