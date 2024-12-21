export enum AFibColumns {
    
    FullName = 0,
    PatientReference,
    Age,
    Gender,
    NHS_Number,
    DateOfBirth,
    MobileTelephone,
    OrganisationCode,
    EthnicityCodeTerm,
    AFConcept,
    IHD_Concept,
    StrokeTIA_Concept,
    NonHaemStrokeConcept,
    PAD_Concept,
    HF_Concept,
    HTN_Concept,
    DiabetesConcept,
    BleedConcept,
    CKD3_5_Concept,
    SMI_Concept,
    LiverFailureConcept,
    HeartValveConcept,
    DementiaConcept,
    PalliativeCareConcept,
    HouseboundConcept,
    LD_Concept,
    CHADSVAScDate,
    CHADSVAScValue,
    HASBLED_Date,
    HASBLED_Value,
    ORBIT_Date,
    ORBIT_Value,
    CreatClearanceDate,
    CreatClearanceValue,
    eGFR_Concept,
    eGFR_Date,
    eGFR_Value,
    INR_Date,
    INR_Value,
    AlcoholConcept,
    AlcoholDate,
    AlcoholValue,
    AuditScoresConcept,
    AuditScoresCodeTerm,
    AuditScoresDate,
    AuditScoresValue,
    ALT_LFT_Concept,
    ALT_LFT_Date,
    ALT_LFT_Value,
    SerumCreatDate,
    SerumCreatValue,
    SystolicBPConcept,
    SystolicBPDate,
    SystolicBPValue,
    DiastolicBPConcept,
    DiastolicBPDate,
    DiastolicBPValue,
    WeightDate,
    WeightValue,
    HaemEstimateDate,
    HaemEstimateValue,
    AnticoagContraCodeTerm,
    AnticoagContraDate,
    AnticoagDeclineCodeTerm,
    AnticoagDeclineDate,
    ThirdPartyCodeTerm,
    ThirdPartyCodeDate,
    WarfarinMed,
    WarfarinDate,
    AspirinMed,
    AspirinDate,
    AntiplateletMed,
    AntiplateletDate,    
    NSAID_Med,
    NSAID_Date,
    DOAC_Med,
    DOAC_Date,
    DOAC_MedCourseStatus,    
    OtherAnticoagulantsMed,
    OtherAnticoagulantsDate,
    ThirdPartyWarfarinMed,
    ThirdPartyWarfarinDate,
    ThirdParty_DOAC_med,
    ThirdParty_DOAC_Date,
    StatinsMed,
    StatinsDate,
    PPI_Med,
    PPI_Date,
    MedsReviewConcept,
    MedsReviewCodeTerm,
    MedsReviewDate,

    // Calculated columns
    OnAnticoagulant,
    OnAspirinAntiplatelet,
    OnNSAID,
    OnStatin,    
    CVD,
    Hypertension,
    BP

}


export enum S1_ReportColumns {

    Full_Name = 0,
    Gender,
    NHS_Number,
    Date_of_Birth,
    Age,
    Mobile_telephone,
    Usual_GP_Organisation,
    
    Ethnicity_Term,
    AF_Term,
    IHD_Term,
    Stroke_TIA_Term,
    Non_Haem_Stroke_Term,
    PAD_Term,
    HF_Term,
    HTN_Term,
    Diabetes_Term,
    Bleed_Term,
    CKD_3_5_Term,
    SMI_Term,
    Liver_Failure_Term,
    Heart_Valve_Term,
    Dementia_Term,
    Palliative_Term,
    Housebound_Term,
    LD_Term,
    CHADSVASc_Date,
    CHADSVASc_Value,
    HASBLED_Date,
    HASBLED_Value,
    ORBIT_Date,
    ORBIT_Value,
    
    Creat_Clearance_Date,
    Creat_Clearance_Value,
    eGFR_Concept,
    eGFR_Date,
    eGFR_Value,
    INR_Date,
    INR_Value,
    Alcohol_Concept,
    Alcohol_Date,
    Alcohol_Value,
    Audit_Scores_Concept,
    Audit_Scores_Code_Term,
    Audit_Scores_Date,
    Audit_Scores_Value,
    ALT_LFT_Concept,
    ALT_LFT_Date,
    ALT_LFT_Value,
    Serum_Creat_Date,
    Serum_Creat_Value,
    Systolic_BP_Concept,
    Systolic_BP_Date,
    Systolic_BP_Value,
    Diastolic_BP_Concept,
    Diastolic_BP_Date,
    Diastolic_BP_Value,
    Weight_Date,
    Weight_Value,
    Haemoglobin_Estimate_Date,
    Haemoglobin_Estimate_Value,
    Anticoag_Contra_Concept,
    Anticoag_Contra_Date,
    Anticoag_Decline_Concept,
    Anticoag_Decline_Date,
    Third_Party_Code_Term,
    Third_Party_Code_Date,
    Warfarin_med,
    Warfarin_Date,
    
    Aspirin_med,
    Aspirin_Date,
    Antiplatelet_med,
    Antiplatelet_Date,
    
    NSAID_med,
    NSAID_Date,
    DOACs_med,
    DOACs_Date,
    Other_Anticoagulants_med,
    Other_Anticoagulants_Date,
    
    Statins_med,
    Statins_Date,
    PPI_med,
    PPI_Date,
    
    Meds_Review_Concept,
    Meds_Review_Code_Term,
    Meds_Review_Date    

}