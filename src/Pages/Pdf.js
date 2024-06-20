import React from "react";
import { useSelector } from "react-redux";
import { usePDF } from "react-to-pdf";
import '../Assets/css/pdf.css'

export default function Pdf() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    const CurrentDate = new Date(Date.now());
    const CurrentTime = new Date().getHours() + ":" + new Date().getMinutes();

    const itemLenght = cartItems ? cartItems.length : 0;
    const SubTotal = useSelector((state) => state.cart.totalAmount);
    const HandlingCharges = SubTotal === 0 ? 0 : 10;
    const Tax = SubTotal === 0 ? 0 : SubTotal * 0.18;
    const TotalPayable = SubTotal + Number(HandlingCharges) + Tax;
    const { toPDF, targetRef } = usePDF({ filename: "bill.pdf" });

    return (
        <div>
            <div ref={targetRef} className="pdf_section">
                <h3 className=" text-center mt-5">Food Delicious</h3>
                <h5 className=" text-center">
                    GST:- <span>22DMUNK8240PATEL24</span>
                </h5>
                <p className=" text-center">
                    DT:- <span>{CurrentDate.toLocaleDateString()}</span> TM:-{" "}
                    <span>{CurrentTime}</span>
                </p>

                <table className=" table ">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th className="text-center align-middle">Quantity</th>
                            <th className="text-center align-middle">Price</th>
                            <th className="text-center align-middle">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((item) => {
                                return <Tr key={item.id} item={item}></Tr>;
                            })
                        }
                    </tbody>
                </table>

                <div className="NItem_NQty d-flex justify-content-around">
                    <p>
                        NItem:- <span>{itemLenght}</span>
                    </p>
                    <p>
                        NQty:- <span>{totalQuantity}</span>
                    </p>
                </div>
                <div className=" gst_total">
                    <p className=" d-flex justify-content-between mb-1">
                        SubTotal <span>{SubTotal}</span>
                    </p>
                    <p className=" d-flex justify-content-between mb-1">
                        Tax <span>{Tax.toFixed(2)}</span>
                    </p>

                    <table className=" table mb-1">
                        <thead>
                            <tr className="text-center align-middle">
                                <th>Total Amount</th>
                                <th>Total TAX</th>
                                <th>Handling Charges</th>
                                <th>Ntotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center align-middle">{SubTotal}</td>
                                <td className="text-center align-middle">{Tax.toFixed(2)}</td>
                                <td className="text-center align-middle">{HandlingCharges}</td>
                                <td className="text-center align-middle">{TotalPayable.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className=" text-center my-3">
                        Final Amount: <span>$ {TotalPayable.toFixed(2)}</span>
                    </h3>
                </div>
            </div>
            <div className=" text-center">
                <button onClick={() => toPDF()} className="pdf-btn mb-5">
                    Download PDF
                </button>
            </div>
        </div>
    )
}

const Tr = (props) => {
    const { title, price, quantity } = props.item;
    const totalPrice = price * quantity;

    return (
        <tr>
            <td className="text-start">{title}</td>
            <td className="text-center">{quantity}</td>
            <td className="text-center">{price}</td>
            <td className="text-center">{totalPrice}</td>
        </tr>
    );
};
