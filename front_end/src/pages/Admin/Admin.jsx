import React from 'react'
import "./Admin.css"
export default function Admin() {
    return (
        <>
            <div id='spcr5'></div>
            <div id='admin_alighn'>
                <a href="/draddingadmin">
                    <button id='admin_btn2'>
                        Adding Dr
                    </button>
                </a>

                &nbsp;
                &nbsp;
                &nbsp;
                <a href="/adminviewingdrs">
                    <button id='admin_btn'>
                        View Available Dr
                    </button>
                </a>

            </div>


        </>
    );
}

