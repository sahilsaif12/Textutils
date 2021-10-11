import React from 'react'

export default function Alert(props) {
    return (
        props.alert &&
        <div class={`container my-2 alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks" width="40" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 12l5 5l10 -10" />
                <path d="M2 12l5 5m5 -5l5 -5" />
            </svg>
            <strong className="h4">{props.alert.type}:</strong> {props.alert.msg}
        </div>
    )
}
