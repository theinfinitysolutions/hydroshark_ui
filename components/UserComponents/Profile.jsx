"use client";
import React, { useState, useEffect, use } from "react";
import { useStore } from "@/utils/store";
import instance from "@/utils/instance";
import { set, useForm } from "react-hook-form";
import Spinner from "../Spinner";
import { PiCoinsFill } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [addressList, setAddressList] = useState([]);
  const [walletData, setWalletData] = useState({});

  const { user, showAddressModal, setShowAddressModal } = useStore();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      phone_number: "",
    },
  });

  useEffect(() => {
    if (user) {
      setValue("email", user.email);
      setValue("name", user.name);
      setValue("phone_number", user.phone_number);
    }
  }, [user]);

  useEffect(() => {
    getAddressDetails();
    getWalletData();
  }, []);

  const getWalletData = () => {
    setLoading(true);
    instance
      .get(`/rewards/wallet/`)
      .then((res) => {
        setWalletData(res.data);
        console.log("wallet data");
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          router.push("/");
        }
        console.log("err", err);
        setLoading(false);
      });
  };

  const getAddressDetails = () => {
    setLoading(true);
    instance
      .get("/accounts/address/")
      .then((res) => {
        setAddressList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          router.push("/");
        }
        console.log(err);
        setLoading(false);
      });
  };

  const onSubmit = (data) => {
    instance
      .patch(`/accounts/user/`, data)
      .then((res) => {
        console.log("res", res);
        reset();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  if (loading) {
    return (
      <div className=" h-[60vh] w-full flex flex-col items-center justify-center">
        {" "}
        <Spinner loading={loading} color="#000000" size={48} />
      </div>
    );
  }

  return (
    <div className=" w-full flex flex-col items-start">
      <h2 className=" text-2xl font-bold text-black mb-4">Profile</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-4"
      >
        <div className=" flex flex-col items-start mt-2">
          <label className=" text-black" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="w-full border text-black border-gray-400 p-2 rounded-lg"
            {...register("name", { required: "This field is required" })}
          />
        </div>
        <div className=" flex flex-col items-start mt-2">
          <label className=" text-black" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="w-full border text-black border-gray-400 p-2 rounded-lg"
            {...register("email", { required: "This field is required" })}
          />
        </div>
        <div className=" flex flex-col items-start mt-2">
          <label className=" text-black" htmlFor="phone_number">
            Phone
          </label>
          <input
            type="text"
            className="w-full border text-black border-gray-400 p-2 rounded-lg"
            {...register("phone_number", {
              required: "This field is required",
            })}
          />
        </div>
      </form>
      <div className=" w-full flex flex-col items-end">
        <button
          type="submit"
          className="bg-black text-white p-2 rounded-lg mt-2 px-8"
        >
          {loading ? (
            <Spinner loading={loading} color="#ffffff" size={16} />
          ) : (
            "Save"
          )}
        </button>
      </div>

      <div className=" flex flex-row justify-between items-center w-full mt-[5vh]">
        <div className=" flex flex-col items-start w-6/12">
          <div className=" flex flex-row justify-start items-center">
            <PiCoinsFill className=" text-2xl text-black" />
            <h2 className=" text-black text-base lg:text-xl ml-2">
              HydroShark Coins
            </h2>
          </div>
          <p className=" text-black text-xs">
            {
              "(You can redeem HydrodShark coins by pucharsing HydroShark Gymwear)"
            }
          </p>
        </div>

        <div className=" flex flex-col items-end w-1/2">
          <div className=" flex flex-row w-3/12 justify-end items-center">
            <PiCoinsFill className=" text-2xl text-black" />
            <p className=" text-black text-lg mt-1">
              {walletData?.wallet_balance}
            </p>
          </div>

          <p className=" text-sm text-black">Available Coins</p>
        </div>
      </div>

      <div className=" flex flex-col items-start w-full mt-[5vh]">
        <h2 className=" text-2xl font-bold text-black mb-4">Address</h2>
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {addressList.map((address, index) => {
            return (
              <div
                key={index}
                className="flex flex-row w-full justify-between bg-gray-100 p-4 rounded-lg "
              >
                <div className=" w-10/12 lg:w-9/12 flex flex-row text-sm flex-wrap items-start">
                  <p className="  text-black">{address.address_line_1},</p>
                  <p className=" text-black">{address.address_line_2},</p>
                  <p className="  text-black">{` ${address.city}, ${address.state},`}</p>
                  <p className="  text-black">{` ${address.country}, ${address.zipcode}`}</p>
                </div>
                <div className=" flex flex-row w-2/12 justify-end items-center gap-x-2">
                  <button
                    onClick={() => {
                      setShowAddressModal({
                        show: true,
                      });
                    }}
                    className=" text-black"
                  >
                    <MdEdit className=" text-black" />
                  </button>
                </div>
              </div>
            );
          })}
          <button
            onClick={() => {
              setShowAddressModal({
                show: true,
              });
            }}
            className="flex flex-row w-full justify-center items-center bg-gray-100 p-4 rounded-lg "
          >
            <IoMdAdd className=" text-2xl text-black" />
            <p className=" text-black text-lg ml-2 mt-1">Add Address</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
