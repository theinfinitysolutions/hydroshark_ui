"use client";
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import instance from "@/utils/instance";
import { set, useForm } from "react-hook-form";
import { useStore } from "@/utils/store";
import Spinner from "./Spinner";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const AddUserAddressModal = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [addressList, setAddressList] = useState(false);
  const { showAddressModal, setShowAddressModal } = useStore();
  const [mode, setMode] = useState("create");
  const [currentAddress, setCurrentAddress] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const getAddressDetails = () => {
    setLoading(true);
    instance
      .get("/accounts/address/")
      .then((res) => {
        setAddressList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const createAddress = (data) => {
    setLoading(true);
    instance
      .post("/accounts/address/", data)
      .then((res) => {
        getAddressDetails();
        reset();
        setLoading(false);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const patchAddress = (data) => {
    setLoading(true);
    let obj = {
      id: currentAddress.id,
      ...data,
    };
    instance
      .post("/accounts/address", obj)
      .then((res) => {
        getAddressDetails();
        reset();
        handleClose();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const onSubmit = (data) => {
    console.log("data", data, mode);
    if (mode == "edit") {
      patchAddress(data);
    } else {
      createAddress(data);
    }
  };

  const handleDelete = (id) => {
    setLoading(true);
    instance
      .patch(`/accounts/address/${id}/`, { is_deleted: true })
      .then(() => {
        getAddressDetails();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAddressDetails();
  }, []);

  useEffect(() => {
    setIsOpen(showAddressModal.show);
  }, [showAddressModal]);

  const handleClose = () => {
    setShowAddressModal({ show: false, mode: "" });
    setIsOpen(false);
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } z-50 inset-0 flex items-center justify-center bg-black/10`}
    >
      <div className="bg-white w-11/12 lg:w-6/12 rounded-md min-h-[40vh] relative overflow-y-scroll  flex flex-col items-center shadow-xl py-[2.5vh]">
        <div className=" absolute right-4 top-4">
          <button
            onClick={() => {
              handleClose();
            }}
          >
            <IoCloseOutline className=" text-black text-xl" />
          </button>
        </div>
        {loading ? (
          <div className=" w-full h-[50vh] flex flex-col items-center justify-center">
            <Spinner loading={loading} size={48} color="#000000" />
          </div>
        ) : (
          <div className=" flex flex-col items-start w-full px-4 lg:px-8">
            <h1 className="text-2xl font-bold text-black">Manage Address</h1>
            <form
              className="flex flex-col w-full items-start bg-gray-100 p-4 rounded-lg"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col items-start  w-full mt-4  overflow-hidden">
                <input
                  placeholder="Address Line 1"
                  className="w-full flex flex-col border-[1px] border-black text-sm text-black  pl-2 py-2 ring-0 focus:ring-0 focus:outline-none"
                  {...register("address_line_1", { required: true })}
                />
                {errors.address_line_1 && (
                  <p className="text-red-500 text-xs mt-[4px]">
                    This field is required
                  </p>
                )}
              </div>
              <div className="flex flex-col items-start  w-full mt-4  overflow-hidden">
                <input
                  placeholder="Address Line 2"
                  className="w-full flex flex-col border-[1px] border-black  text-sm text-black  pl-2 py-2 ring-0 focus:ring-0 focus:outline-none"
                  {...register("address_line_2", { required: true })}
                />
                {errors.address_line_2 && (
                  <p className="text-red-500 text-xs mt-[4px]">
                    This field is required
                  </p>
                )}
              </div>
              <div className="flex flex-row justify-between w-full mt-4">
                <div className="flex flex-col items-start  w-[47.5%]  overflow-hidden">
                  <input
                    placeholder="City"
                    className="w-full flex flex-col border-[1px] border-black  text-sm text-black pl-2 py-2 ring-0 focus:ring-0 focus:outline-none"
                    {...register("city", { required: true })}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-[4px]">
                      This field is required
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-start  w-[47.5%]  overflow-hidden">
                  <input
                    placeholder="State"
                    className="w-full flex flex-col border-[1px] border-black  text-sm text-black pl-2 py-2 ring-0 focus:ring-0 focus:outline-none"
                    {...register("state", { required: true })}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-[4px]">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-row justify-between w-full mt-4">
                <div className="flex flex-col items-start  w-[47.5%]  overflow-hidden">
                  <input
                    placeholder="Country"
                    className="w-full flex flex-col border-[1px] border-black text-sm text-black pl-2 py-2 ring-0 focus:ring-0 focus:outline-none"
                    {...register("country", { required: true })}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-xs mt-[4px]">
                      This field is required
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-start  w-[47.5%] overflow-hidden">
                  <input
                    placeholder="Zipcode"
                    className="w-full flex flex-col border-[1px] border-black  text-sm text-black py-2 pl-2 ring-0 focus:ring-0 focus:outline-none"
                    {...register("zipcode", { required: true })}
                  />
                  {errors.zipcode && (
                    <p className="text-red-500 text-xs mt-[4px]">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className=" w-full flex flex-row justify-end items-center gap-x-4 mt-4">
                <button className=" text-black border-[1px] px-4 py-2 rounded-md border-black">
                  <p className=" mt-1">Cancel</p>
                </button>
                <button
                  className=" text-white bg-black px-4 py-2 border-[1px] rounded-md border-black"
                  type="submit"
                >
                  {loading ? (
                    <Spinner loading={loading} color="#fffffff" size={16} />
                  ) : (
                    <p className=" mt-1">
                      {mode == "edit" ? "Update" : "Submit"}
                    </p>
                  )}
                </button>
              </div>
            </form>

            <div className="flex flex-col items-start mt-4">
              {addressList.length > 0 ? (
                <p className=" text-xl text-black font-bold">Address List</p>
              ) : null}
              {loading ? (
                <Spinner loading={loading} size={48} color="#000000" />
              ) : (
                <div
                  id="address"
                  className="flex flex-col h-[20vh] overflow-y-scroll  items-start w-full mt-4"
                >
                  {addressList &&
                    addressList.map((address, index) => (
                      <div
                        key={index}
                        className="flex flex-row justify-between bg-gray-100 p-4 rounded-lg mb-4"
                      >
                        <div className=" w-9/12 flex flex-row text-sm flex-wrap items-start">
                          <p className="  text-black">
                            {address.address_line_1},
                          </p>
                          <p className=" text-black">
                            {address.address_line_2},
                          </p>
                          <p className="  text-black">{` ${address.city}, ${address.state},`}</p>
                          <p className="  text-black">{` ${address.country}, ${address.zipcode}`}</p>
                        </div>
                        <div className=" flex flex-row w-2/12 justify-end items-center gap-x-2">
                          <button
                            onClick={() => {
                              setCurrentAddress(address);
                              setMode("edit");
                              setValue(
                                "address_line_1",
                                address.address_line_1
                              );
                              setValue(
                                "address_line_2",
                                address.address_line_2
                              );
                              setValue("city", address.city);
                              setValue("state", address.state);
                              setValue("country", address.country);
                              setValue("zipcode", address.zipcode);
                            }}
                            className=" text-black"
                          >
                            <MdEdit className=" text-black" />
                          </button>
                          <button
                            onClick={() => {
                              handleDelete(address.id);
                            }}
                            className=" text-black"
                          >
                            <MdDelete className=" text-black" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUserAddressModal;
