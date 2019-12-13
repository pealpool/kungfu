
Private Sub CommandButton1_Click()
    
    Dim myPath As String, myData As String
    Dim wkb As Workbook
    Dim wksSix As Worksheet, wksBase As Worksheet, _
        wksAtt As Worksheet, wksDef As Worksheet, _
        wksDod As Worksheet, wksPas As Worksheet
    
    Dim thisSchool As String
    
    
    Set wkb = ThisWorkbook
    Set wksSix = wkb.Sheets("风格")
    Set wksBase = wkb.Sheets("基本")
    Set wksAtt = wkb.Sheets("攻击")
    Set wksDef = wkb.Sheets("防御")
    Set wksDod = wkb.Sheets("闪避")
    Set wksPas = wkb.Sheets("被动")


    'myPath = ThisWorkbook.Path & "\" & Left(ThisWorkbook.name, InStr(ThisWorkbook.name, ".")) & "js"
    myPath = Left(ThisWorkbook.Path, InStrRev(ThisWorkbook.Path, "\") - 1) & "\src\myData.js"


    myData = "'use strict'" & vbCr & "export const data_S={" & vbCr


    Rem SixData ----------------------------------------------------------------------------

    myData = myData & "'sixDataSum':["
    For i = 1 To 50
        If wksSix.Cells(i, 1) = "sixDataSum" Then
            myData = myData & _
                wksSix.Cells(i, 3) & "," & _
                wksSix.Cells(i, 4) & "," & _
                wksSix.Cells(i, 5) & "," & _
                wksSix.Cells(i, 6) & "," & _
                wksSix.Cells(i, 7)
            Exit For
        End If
    Next
    myData = myData & "],"

    Rem --------------------------------------------------------------------


    For i = 2 To 12
        myData = myData & "'" & wksBase.Cells(i, 1) & "':{"
        thisSchool = wksBase.Cells(i, 2)
        myData = myData & "'name':'" & wksBase.Cells(i, 2) & "',"
        myData = myData & "'level':['" & _
            wksBase.Cells(i, 3) & "','" & _
            wksBase.Cells(i, 4) & "','" & _
            wksBase.Cells(i, 5) & "','" & _
            wksBase.Cells(i, 6) & "'],"
        myData = myData & "'rank':'" & wksBase.Cells(i, 7) & "',"
        myData = myData & "'person':'" & wksBase.Cells(i, 8) & "',"

        Rem----------------------------------------------------------------
        myData = myData & "'star':['" & _
            wksBase.Cells(i, 9) & "','" & _
            wksBase.Cells(i, 10) & "'"
        For j = 11 To 12
            If wksBase.Cells(i, j) = "" Then
                Exit For
            End If
            myData = myData & ",'" & wksBase.Cells(i, j) & "'"
        Next
        myData = myData & "],"
        Rem---------------------------------------------------------------
        myData = myData & "'inf':'" & wksBase.Cells(i, 13) & "',"
        Rem---------------------------------------------------------------
        myData = myData & "'sixData':["
        For j = 1 To 50
            If wksSix.Cells(j, 1) = "sixData" Then
                For k = 2 To 20
                    If wksSix.Cells(1, k) = thisSchool Then
                        myData = myData & _
                            wksSix.Cells(j + 1, k) & "," & _
                            wksSix.Cells(j + 2, k) & "," & _
                            wksSix.Cells(j + 3, k) & "," & _
                            wksSix.Cells(j + 4, k) & "," & _
                            wksSix.Cells(j + 5, k) & "],"
                        Exit For
                    End If
                Next
                Exit For
            End If
        Next
        Rem---------------------------------------------------------------
        myData = myData & "'zAtt':{"
        For j = 3 To 200
            If wksAtt.Cells(j, 1) = thisSchool Then
                k = 0
                Do Until wksAtt.Cells(j + k, 2) = ""
                    myData = myData & "'" & wksAtt.Cells(j + k, 2) & "':{"
                    Rem------------------------
                    myData = myData & "'attFr_body':["
                    If wksAtt.Cells(j + k, 3) = "1" Then
                        myData = myData & "'head',"
                    End If
                    If wksAtt.Cells(j + k, 4) = "1" Then
                        myData = myData & "'hand',"
                    End If
                    If wksAtt.Cells(j + k, 5) = "1" Then
                        myData = myData & "'leg',"
                    End If
                    myData = myData & "],"
                    Rem------------------------
                    myData = myData & "'attTo_body':["
                    If wksAtt.Cells(j + k, 6) = "1" Then
                        myData = myData & "'head',"
                    End If
                    If wksAtt.Cells(j + k, 7) = "1" Then
                        myData = myData & "'body',"
                    End If
                    If wksAtt.Cells(j + k, 8) = "1" Then
                        myData = myData & "'hand',"
                    End If
                    If wksAtt.Cells(j + k, 9) = "1" Then
                        myData = myData & "'leg',"
                    End If
                    myData = myData & "],"
                    Rem------------------------
                    myData = myData & "'hurt_o':" & isZero(wksAtt.Cells(j + k, 10)) & ","
                    myData = myData & "'hurt_i':" & isZero(wksAtt.Cells(j + k, 11)) & ","
                    myData = myData & "'hit':" & isZero(wksAtt.Cells(j + k, 12)) & ","
                    myData = myData & "'block':" & isZero(wksAtt.Cells(j + k, 13)) & ","
                    myData = myData & "'time_q':" & isZero(wksAtt.Cells(j + k, 14)) & ","
                    myData = myData & "'time_z':" & isZero(wksAtt.Cells(j + k, 15)) & ","
                    myData = myData & "'time_h':" & isZero(wksAtt.Cells(j + k, 16)) & ","
                    myData = myData & "'const':" & isZero(wksAtt.Cells(j + k, 17)) & ","
                    myData = myData & "'hurt_a':" & isZero(wksAtt.Cells(j + k, 18)) & ","
                    myData = myData & "'hurt_l':" & isZero(wksAtt.Cells(j + k, 19)) & ","
                    myData = myData & "'hurt_d':" & isZero(wksAtt.Cells(j + k, 20)) & ","
                    myData = myData & "'TX_inf':'" & wksAtt.Cells(j + k, 21) & "',"
                    myData = myData & "'LZ_inf':'" & wksAtt.Cells(j + k, 22) & "',"
                    myData = myData & "'remark':'" & wksAtt.Cells(j + k, 23) & "',"
                    Rem------------------------
                    myData = myData & "},"
                    k = k + 1
                Loop
                Exit For
            End If
        Next
        myData = myData & "},"
        Rem---------------------------------------------------------------
        myData = myData & "'zDef':{"
        For j = 3 To 150
            If wksDef.Cells(j, 1) = thisSchool Then
                k = 0
                Do Until wksDef.Cells(j + k, 2) = ""
                    myData = myData & "'" & wksDef.Cells(j + k, 2) & "':{"
                    Rem------------------------
                    myData = myData & "'def_body':["
                    If wksDef.Cells(j + k, 3) = "1" Then
                        myData = myData & "'hand',"
                    End If
                    If wksDef.Cells(j + k, 4) = "1" Then
                        myData = myData & "'leg',"
                    End If
                    myData = myData & "],"
                    Rem------------------------
                    myData = myData & "'block':" & isZero(wksDef.Cells(j + k, 5)) & ","
                    myData = myData & "'TX_inf':'" & wksDef.Cells(j + k, 6) & "',"
                    myData = myData & "'LZ_inf':'" & wksDef.Cells(j + k, 7) & "',"
                    myData = myData & "'remark':'" & wksDef.Cells(j + k, 8) & "',"
                    Rem------------------------
                    myData = myData & "},"
                    k = k + 1
                Loop
                Exit For
            End If
        Next
        myData = myData & "},"
        Rem---------------------------------------------------------------
        myData = myData & "'zDod':{"
        For j = 2 To 150
            If wksDod.Cells(j, 1) = thisSchool Then
                k = 0
                Do Until wksDod.Cells(j + k, 2) = ""
                    myData = myData & "'" & wksDod.Cells(j + k, 2) & "':{"
                    Rem------------------------
                    myData = myData & "'const':" & isZero(wksDod.Cells(j + k, 3)) & ","
                    myData = myData & "'dod':" & isZero(wksDod.Cells(j + k, 4)) & ","
                    myData = myData & "'TX_inf':'" & wksDod.Cells(j + k, 5) & "',"
                    myData = myData & "'LZ_inf':'" & wksDod.Cells(j + k, 6) & "',"
                    myData = myData & "'remark':'" & wksDod.Cells(j + k, 7) & "',"
                    Rem------------------------
                    myData = myData & "},"
                    k = k + 1
                Loop
                Exit For
            End If
        Next
        myData = myData & "},"
        Rem---------------------------------------------------------------
        myData = myData & "'zPas':{"
        For j = 2 To 150
            If wksPas.Cells(j, 1) = thisSchool Then
                k = 0
                Do Until wksPas.Cells(j + k, 2) = ""
                    myData = myData & "'" & wksPas.Cells(j + k, 2) & "':{"
                    myData = myData & "'TX_inf':'" & wksPas.Cells(j + k, 3) & "',"
                    myData = myData & "'remark':'" & wksPas.Cells(j + k, 4) & "',"
                    myData = myData & "},"
                    k = k + 1
                Loop
                Exit For
            End If
        Next
        myData = myData & "},"
        Rem---------------------------------------------------------------
        myData = myData & "},"
    Next
    myData = myData & "}"
    Rem---------------------------------------------------------------
    Dim objStream As Object
    Set objStream = CreateObject("ADODB.Stream")
    With objStream
        .Type = 2
        .Charset = "UTF-8"
        .Open
        .WriteText myData
        .SaveToFile myPath, 2
    End With
End Sub




Private Function isZero(s As String) As Double
    If s = "" Then
        isZero = 0
        Else
        isZero = s
    End If
End Function


