import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import React, { useRef, useState } from "react"

export default function index() {
  const auth = getAuth()

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       const errorMessage = error.message
  //       // ..
  //     })

  return <div>index</div>
}
