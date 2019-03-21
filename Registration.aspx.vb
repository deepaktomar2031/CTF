Imports System.IO
Imports System.Net
Imports System.Net.Mail
Imports MySql.Data.MySqlClient
Imports System.Data
Imports MySql.Data

Partial Class Registration
    Inherits System.Web.UI.Page

    Dim con As String = ConfigurationManager.ConnectionStrings("myConnectionString").ConnectionString
    Dim SQLConnection As New MySqlConnection(con)
    Dim cmd As New MySqlCommand
    Dim dr As MySqlDataReader

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Try
            If Session("login") = Nothing Then
                TextBox1.Focus()
            Else
                Response.Redirect("Home.aspx", False)
            End If
        Catch ex As Exception
            Response.Redirect("Home.aspx", False)
        End Try
    End Sub

    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim en As String = TextBox1.Text
        'If en.Length = 6 And Char.IsLetter(en(0)) And Char.IsLetter(en(1)) And Char.IsDigit(en(2)) And Char.IsDigit(en(3)) And Char.IsDigit(en(4)) And Char.IsDigit(en(5)) Then
        '   GoTo Line1
        'Else
        '   Response.Write("<script>alert('Enter Valid Enrollment Number');</script>")
        '  GoTo Line2
        'End If
Line1:
        Dim rand As Random = New Random
        Dim number As Double = rand.Next(1, 99999999)
        Dim Reg_ID As String = TextBox1.Text
        Try
            cmd.CommandText = "select * from registration where regno=@reg_no"
            cmd.Parameters.AddWithValue("@reg_no", TextBox1.Text)
            cmd.Connection = SQLConnection
            SQLConnection.Open()
            cmd.ExecuteNonQuery()
            dr = cmd.ExecuteReader()
            If dr.Read Then
                Dim Reg_Status As Integer = dr(3)
                If Reg_Status = 0 Then

                    Dim Reg_no As String = dr(0).ToString
                    Dim Reg_Email As String = dr(1).ToString
                    Dim Reg_Name As String = dr(2).ToString
                    'Dim Reg_Class As String = dr(4).ToString
                    'Dim Reg_pass As String = number
                    Dim Reg_Roll As String = dr(4).ToString
                    'Dim Reg_ExamRoll As String = dr(6).ToString
                    SQLConnection.Close()
                    cmd.CommandText = "INSERT INTO login(regno,email,name,pass,rollno) VALUES ('" & Reg_no & "','" & Reg_Email & "','" & Reg_Name & "','" & number.ToString & "','" & Reg_Roll & "')"
                    cmd.Connection = SQLConnection
                    SQLConnection.Open()
                    cmd.ExecuteNonQuery()
                    SQLConnection.Close()

                    Reg_Status = 1
                    cmd.CommandText = "UPDATE registration SET status='" & Reg_Status & "' WHERE regno=@regno"
                    cmd.Parameters.AddWithValue("@regno", TextBox1.Text)
                    cmd.Connection = SQLConnection
                    SQLConnection.Open()
                    cmd.ExecuteNonQuery()

                    'email code
                    Dim email_str As String = Reg_Email
                    Using email As New MailMessage("Your Email ID", Reg_Email)
                        email.Subject = "Registration Password"
                        email.Body = "YOUR PASSWORD IS : " + number.ToString
                        email.IsBodyHtml = True
                        Dim smtp As New SmtpClient()
                        smtp.Host = "smtp.gmail.com"
                        smtp.EnableSsl = True
                        Dim credential As New NetworkCredential("Your Email ID", "Your Password")
                        smtp.UseDefaultCredentials = True
                        smtp.Credentials = credential
                        smtp.Port = 587
                        smtp.Send(email)
                        TextBox1.Text = ""
                        Response.Write("<script>alert('Registration Successful! Please Login');</script>")
                        'Response.Redirect("Login.aspx", False)
                        'MsgBox("Registration Successful!")
                    End Using
                Else
                    Response.Write("<script>alert('Already Registered');</script>")
                    'Response.Redirect("Login.aspx", False)
                    'MsgBox("Already Reg.")
                End If
            Else
                Response.Write("<script>alert('Invalid User');</script>")
                'Response.Redirect("Registration.aspx", False)
                'MsgBox("INVALID USER!.... SORRY")
            End If
        Catch ex As Exception
            MsgBox(ex.ToString)
            'Response.Redirect("ErrorPage.aspx", False)
        Finally
            SQLConnection.Close()
        End Try
Line2:
        'Response.Redirect("ErrorPage.aspx", False)
    End Sub
End Class
