import React from 'react'
import {Header} from "semantic-ui-react";

// we can write this a few different ways
// 1. MainHeader(props) {
//     a. const title = props.title
//     b. const { title } = props
// or
// 2. MainHeader({title}) {
//      <Header>{title}</Header>

function MainHeader({title, type = 'h1'}) {
    return (
        <Header as={type}>{title}</Header>
    )
}

export default MainHeader
