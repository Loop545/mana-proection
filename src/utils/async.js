// External
import axios from 'axios';

// sendEnquiry
export const postMessage = (params, statusCallback) => {
    //   curl -X POST -H "Content-Type: application/x-www-form-urlencoded" \
    //   -d "fullname=JIM&email=jims@email.com&message=blah" \
    //   http:/www.brightbear.com.au/wp-json/contact-form-7/v1/contact-forms/5/feedback  

    const payload = new URLSearchParams();
    Object.keys(params).forEach(param => {
        payload.append(param, params[param])
    })

    axios.post(
        `http://localhost:8000/wp-json/contact-form-7/v1/contact-forms/5/feedback`,
        payload
    ).then(res => {
        if (res.data.status === 'mail_sent') {
            statusCallback(true);
        }
        else if (res.data.status === 'validation_failed') {
            statusCallback(false);
        }
        else {
            statusCallback(-1);
        }
    }).catch(e => {
        statusCallback(-1);
    });

};


