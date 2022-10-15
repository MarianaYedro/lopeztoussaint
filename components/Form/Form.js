import React from "react";
//import { useForm } from "react-hook-form";
//import {yupResolver} from "@hookform/resolvers/yup";
//import * as yup from "yup";
import { useRouter } from 'next/router';
import styles from "./Form.module.css";

export default function Form() {
  
  const router = useRouter();
  
  /*validation*/
  const schema = yup.object ({
    name: yup.string().required().min(3).max(50),
    firma: yup.string().required().min(3).max(50),
    phone: yup.number().required(),
    email: yup.string().required().min(4).email(50),
    message: yup.string().required().min(10).max(50),
  }).required();
  
  const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver (schema)});

  const onSubmit = data => {
    fetch('/api/contact', {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: { 'Content-Type' : 'aplication/json'},
      body: JSON.stringify(data)
    })
    alert("Mensaje enviado con éxito") 
  }

  return (
          <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <h2 id="contact">Formulario de consulta</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre y apellido"
                  {...register("name", { required: true })}
                />
                  {errors.name?.message && <span>Por favor, ingresá tu nombre</span>}
        
                <input 
                  type="text"
                  name="firma"
                  placeholder="Nombre de la firma"
                  {...register("firma", { required: true })}
                />
                  {errors.firma && <span>Por favor, ingresá la compañía</span>}
             
                <input 
                  type="number"
                  name="phone"
                  placeholder="Número de contacto"
                  {...register("phone", { required: true })}
                />
                  {errors.phone && <span>Por favor, ingresá el número de contacto</span>}
           
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                />
                  {errors.email && <span>Por favor, ingresá un email válido</span>}
    
                <textarea 
                  name="message"
                  placeholder="Por favor, escribí acá tu consulta"
                  {...register("message", { required: true }) }>
                </textarea>
                  {errors.message && <span>Por favor, ingresá una consulta</span>}
                
                <button type="submit" className={styles.button}> Enviar </button>
            </form>
          </div>
  );
}