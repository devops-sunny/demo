import { useFormContext, useFieldArray } from 'react-hook-form';
import ConditionalInput from "../../../../hook-form/ArreyFields/ConditionalInput";
import ConditionalSelect from "../../../../hook-form/ArreyFields/ConditionalSelect";
import ConditionalDatepicker from "../../../../hook-form/ArreyFields/ConditionalDatepicker";
import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { RHFTextField  } from "../../../../hook-form";
import Delete from '../../../../assets/images/delete.png';

export default function NewEditDetailsPrescriptions({isSubmitting, handleSubmit,isEdit }) {

  const genderItems = [
    { id: "Paracetamol", title: "Paracetamol" },
    { id: "d'cold", title: "d'cold" },
  ];
  const { control, setValue, watch } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const values = watch();

  const [loadingSend, setLoadingSend] = React.useState(false);

  const handleAdd = () => {
    append({
      TypeofConsultation: "",
        selectMedicine: "",
        Dose: "",
        Ius: "",
        writeInstructions: "",
        NumberDose: "",
        Durations: "",
        TotalQuantity: "",
        startDate: "",
        EndDate: "",
        RoutOfAdministration: "",
        Refill: "",
        comment: "",
    });
  };

  const newData = {
    ...values,
    items: values.items.map((item) => ({
      ...item,
    })),
  };

  const handleCreateAndSend = async () => {
    setLoadingSend(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      // reset();
      setLoadingSend(false);
      console.log(JSON.stringify(newData, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="page-row">
        <div className="titlebox">
          <h2> Add New Prescription </h2>
        </div>
        <div className="custom-btn-grp">
          <a href="#" className="border-btn">
            Go Back
          </a>
        </div>
      </div>
      <div className="white-box">
        <div className="patients-details-preview add-new-detailprescription">
            {fields.map((item, index) => {
              return (
                <>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <ConditionalSelect
                        name={`items.${index}.TypeofConsultation`}
                        {...{ control, index, item }}
                        label="TypeofConsultation"
                        options={genderItems}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ConditionalSelect
                        name={`items.${index}.selectMedicine`}
                        {...{ control, index, item }}
                        label="selectMedicine"
                        options={genderItems}
                      />
                    </Grid>
                  </Grid>
                  <div className="drug-box">
                    <h2 className="feed-durg">
                      Drug 1 :{" "}
                      <span>
                        {values?.items?.[index]?.TypeofConsultation}
                      </span>
                    </h2>
                    <img src={Delete} alt="Delete" className='delete' onClick={() => remove(index)}/>
                  </div>

                  <div className="instructions-box">
                    <h3>Instructions:</h3>

                    <Grid container spacing={2}>
                      <Grid item sm={4} xs={12}>
                        <ConditionalInput
                          name={`items.${index}.Dose`}
                          {...{ control, index, item }}
                          label="Dose"
                        />
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        <ConditionalInput
                          name={`items.${index}.Ius`}
                          {...{ control, index, item }}
                          label="Ius"
                        />
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        <ConditionalInput
                          name={`items.${index}.writeInstructions`}
                          {...{ control, index, item }}
                          label="writeInstructions"
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="instructions-box addline">
                    <h3>Duration:</h3>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <ConditionalInput
                          name={`items.${index}.NumberDose`}
                          {...{ control, index, item }}
                          label="NumberDose"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <ConditionalSelect
                          name={`items.${index}.Durations`}
                          {...{ control, index, item }}
                          label="Durations"
                          options={genderItems}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <ConditionalInput
                          name={`items.${index}.TotalQuantity`}
                          {...{ control, index, item }}
                          label="TotalQuantity"
                        />
                      </Grid>
                    </Grid>
                    <Box m={2} />

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <ConditionalDatepicker
                          name={`items.${index}.startDate`}
                          {...{ control, index, item }}
                          label="startDate"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <ConditionalDatepicker
                          name={`items.${index}.EndDate`}
                          {...{ control, index, item }}
                          label="EndDate"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <ConditionalSelect
                          name={`items.${index}.RoutOfAdministration`}
                          {...{ control, index, item }}
                          options={genderItems}
                        />
                      </Grid>
                    </Grid>
                    <Box m={2} />

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <ConditionalInput
                          name={`items.${index}.Refill`}
                          {...{ control, index, item }}
                          label="Refill"
                        />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <ConditionalInput
                          name={`items.${index}.comment`}
                          {...{ control, index, item }}
                          label="comment"
                        />
                      </Grid>
                    </Grid>
                  </div>
                </>
              );
            })}

            <div className="custom-btn-grp">
              <a
                href="#"
                className="add-btn cmn-btn"
                onClick={handleAdd}
              >
                Add More drug
              </a>
            </div>

            <div className="instructions-box">
              <h3>Physical Reamrks:</h3>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <RHFTextField
                    label="PhysicalRemarks"
                    name="PhysicalRemarks"
                    onChange={(event) =>
                      setValue("PhysicalRemarks",(event.target.value))
                    }
                  />
                </Grid>
              </Grid>
            </div>
            <div className="page-row">
              <div className="titlebox">
                <p>
                  Written by: <span>Micle D.(ID -33526561265)</span>{" "}
                </p>
              </div>
              <button
          size="large"
          className="cmn-btn"
          variant="contained"
          loading={loadingSend && isSubmitting}
          onClick={handleSubmit(handleCreateAndSend)}
        >
          {isEdit ? "Update" : "Create"} & Send
        </button>

            </div>
        </div>
      </div>
    </>
  );
}
