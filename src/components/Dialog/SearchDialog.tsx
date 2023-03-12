import { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import CloseDialogButton from "@/components/Dialog/CloseDialogButton";
import { Button } from "@/components/Elements";

type SearchDialogProps = {
  isOpen: boolean;
  close: () => void;
  search?: (nameJa: string) => void;
};

const SearchDialog = ({ isOpen, close, search }: SearchDialogProps) => {
  const [searchParam, setSearchParam] = useState("");

  const clickHandler = () => {
    if (!search) return;
    search(searchParam);
    close();
  };

  const resetHandler = () => {
    setSearchParam("");
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    なまえでさがす
                  </Dialog.Title>
                  <div className="mt-2 p-4">
                    <label
                      htmlFor="pokemon-name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-black"
                    >
                      ポケモンのなまえ
                    </label>
                    <input
                      type="text"
                      name="pokemon-name"
                      id="pokemon-name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="カタカナでにゅうりょくしてね"
                      required
                      onChange={(e) => {
                        setSearchParam(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-6 gap-4">
                    <Button
                      size="sm"
                      className="col-start-1 col-end-4"
                      onClick={clickHandler}
                    >
                      けんさくする
                    </Button>
                    <Button
                      size="sm"
                      variant="inverse"
                      className="col-start-4 col-end-7"
                      onClick={resetHandler}
                    >
                      リセットする
                    </Button>
                  </div>

                  <CloseDialogButton close={close} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SearchDialog;
