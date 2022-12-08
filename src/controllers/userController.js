import db from "../../prisma/connection.js";
import { request, response } from "express";

// membuat data user
export const user_create = async (req = request, res = response) => {
    try {
        // membuat variabel data yang isinya permintaan body
        const data = await req.body

        // membuat variabel createUser yang isinya mengambil database user yang akan dibuat
        const createUser = await db.users.create(
            {
                // mengambil variabel data yang ada diatas
                data: data,
            }
        );

        // mengembalikan permintaan status kedalam bentuk json
        return res.status(201).json(
            {
                // menampilkan pesan bahwa data berhasil dibuat
                success: true,
                message: "Data User Berhasil Dibuat..",
            }
        );

    } catch (error) {

        // mengembalikan respons kedalam bentuk json
        return res.status(501).json(
            {
                // menampilkan pesan bahwa data tidak berhasil dibuat
                success: false,
                message: error.message,
            }
        );

    }
}

// membaca data user
export const user_read = async (req = request, res = response) => {
    try {
        // membuat variabel result 
        const result = await db.users.findMany()

        // mengembalikan status pesan berhasil
        return res.status(200).json(
            {
                success: true,
                message: result,
            }
        )
    } catch (error) {
        // mengembalikan status pesan gagal
        return res.status(500).json(
            {
                success: false,
                error: error.message,
            }
        )
    }
}

