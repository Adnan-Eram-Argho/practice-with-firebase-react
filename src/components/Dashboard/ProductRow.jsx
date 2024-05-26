/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ProductRow({ headphone }) {




    //DELETE
    const handleDelete = async () => {
        let txt;
        let del;
        if (confirm("Press a button!")) {
            txt = true;
        } else {
            txt = false;
        }
        console.log(txt)
        if (txt) {
            del = await axios.delete(`http://localhost:3000/headphone/${headphone?.id}`)
        }
        if (del) {
            toast.success("Deleted");
        }
    };
    return (
        <tr>
            <th>{headphone?.id}</th>
            <td>{headphone.title} </td>
            <td>{headphone.brand}</td>
            <td>{headphone.price}</td>
            <td>
                <Link to={`/dashboard/edit-products/${headphone?.id}`} className="btn bg-base-300">
                    Edit
                </Link>
            </td>
            <td>
                <button className="btn btn-error" onClick={handleDelete}>
                    Delete
                </button>
            </td>


        </tr>
    );
}

export default ProductRow;
